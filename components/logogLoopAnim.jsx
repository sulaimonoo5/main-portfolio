import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value) =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener("resize", handleResize);
      callback();
      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remaining = images.length;
    const handleLoad = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad, { once: true });
        img.addEventListener("error", handleLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useAnimationLoop = (
  trackRef,
  targetVelocity,
  seqWidth,
  isHovered,
  pauseOnHover
) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime =
        Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;

      const easingFactor =
        1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  gap = 32,
  pauseOnHover = true,
  logoHeight = 28,
  ariaLabel = "Partner logos",
  style,
  className,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === "left" ? 1 : -1;
    const speedMultiplier = speed < 0 ? -1 : 1;
    return magnitude * directionMultiplier * speedMultiplier;
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded =
        Math.ceil(containerWidth / sequenceWidth) +
        ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(
    updateDimensions,
    [containerRef, seqRef],
    [logos, gap, logoHeight]
  );
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsHovered(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsHovered(false);
  }, [pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: toCssLength(width),
        ...style,
      }}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          willChange: "transform",
          whiteSpace: "nowrap",
        }}>
        {Array.from({ length: copyCount }, (_, i) => (
          <ul
            key={i}
            ref={i === 0 ? seqRef : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: `${gap}px`,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}>
            {logos.map((item, index) => (
              <li key={`${i}-${index}`} style={{ height: `${logoHeight}px` }}>
                {"node" in item ? (
                  item.node
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    height={logoHeight}
                    style={{
                      display: "block",
                      height: `${logoHeight}px`,
                      width: "auto",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
});

export default LogoLoop;
