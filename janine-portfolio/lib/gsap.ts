import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Single registration point - importing this anywhere guarantees
// the plugins are registered exactly once
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export { gsap, ScrollSmoother, ScrollTrigger };
