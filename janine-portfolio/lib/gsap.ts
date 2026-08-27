import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Single registration point - importing this anywhere guarantees
// the plugins are registered exactly once
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Draggable);

export { Draggable, gsap, ScrollSmoother, ScrollTrigger };
