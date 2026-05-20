import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const totalTestimonials = testimonials.length;
  const rotations = useMemo(() => {
    const rotationPattern = [-5, 4, -3, 2, -2, 3];

    return testimonials.map((_, index) => rotationPattern[index % rotationPattern.length]);
  }, [testimonials]);

  useEffect(() => {
    if (!totalTestimonials) {
      setActive(0);
      return;
    }

    setActive((prev) => Math.min(prev, totalTestimonials - 1));
  }, [totalTestimonials]);

  const handleNext = () => {
    if (!totalTestimonials) {
      return;
    }

    setActive((prev) => (prev + 1) % totalTestimonials);
  };

  const handlePrev = () => {
    if (!totalTestimonials) {
      return;
    }

    setActive((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const isActive = (index) => {
    return index === active;
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchEndX - touchStartX.current;

    touchStartX.current = null;

    if (Math.abs(deltaX) < 45) {
      return;
    }

    if (deltaX < 0) {
      handleNext();
      return;
    }

    handlePrev();
  };

  useEffect(() => {
    if (autoplay && totalTestimonials > 1) {
      const interval = setInterval(handleNext, 6500);
      return () => clearInterval(interval);
    }
  }, [autoplay, totalTestimonials]);

  if (!totalTestimonials) {
    return null;
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-12 antialiased md:max-w-4xl md:px-8 lg:px-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        <div className="order-1 md:order-none">
          <div
            className="relative h-[320px] w-full overflow-hidden rounded-3xl md:h-[360px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y" }}
          >
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.35,
                    scale: isActive(index) ? 1 : 0.94,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index)
                      ? 999
                      : totalTestimonials - index,
                    y: isActive(index) ? [0, -6, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    loading="lazy"
                    height={500}
                    className="h-full w-full rounded-3xl border border-white/10 object-cover object-center shadow-[0_18px_60px_rgba(15,23,42,0.35)]" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="order-2 flex flex-col justify-between py-2 md:order-none md:py-4">
          <motion.div
            key={active}
            initial={{
              y: 12,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <h3 className="text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-violet-300/70">
              {testimonials[active].designation}
            </p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base leading-7 text-slate-300 md:text-lg"
            >
              {testimonials[active].quote}
            </motion.p>
          </motion.div>
          <div className="flex items-center justify-between gap-4 pt-8 md:pt-0">
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show ${testimonial.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive(index)
                      ? "w-8 bg-violet-400"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900 transition-colors hover:bg-neutral-800">
              <IconArrowLeft
                className="h-5 w-5 text-neutral-300 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900 transition-colors hover:bg-neutral-800">
              <IconArrowRight
                className="h-5 w-5 text-neutral-300 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
