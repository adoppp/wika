export type Options = {
  disable?: boolean;
  autoplay?: boolean;
  autoplayDirection?: 'right' | 'left';
  autoplaySpeed?: number;
  arrows?: boolean;
  dots?: boolean;
  itemsToShow?: number;
  itemsToSwipe?: number;
  prevArrow?: string | Element;
  nextArrow?: string | Element;
  // draggable?: boolean;      // Not yet implemented
  mobileFirst?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
  swipe?: boolean;
  gap?: number;
  itemWidth?: number;
  infinite?: boolean;
  responsive?: {
    breakpoint: number;
    settings: {
      disable?: boolean;
      itemsToShow?: number;
      itemsToSwipe?: number;
      gap?: number;
      arrows?: boolean;
      itemWidth?: number;
    };
  }[];
};

const slider = (
  className: string,
  options: Options,
): NodeJS.Timeout | undefined => {
  // Update options depends on current screen width if responsive configured
  const { responsive = [], mobileFirst = true } = options;
  if (responsive) updateOptions();

  // Destructuring options
  const {
    disable = false,
    autoplay = false,
    autoplayDirection = 'right',
    autoplaySpeed = 3000,
    arrows = false,
    dots = false,
    itemsToShow = 1,
    itemsToSwipe = 1,
    prevArrow,
    nextArrow,
    // draggable = true,      // Not yet implemented
    pauseOnHover = false,
    speed = 300,
    swipe = false,
    gap = 0,
    itemWidth,
    infinite = false,
  } = options;

  // Set current slide to 1
  let currentSlide: number = 1;

  // Disable slider if configured
  if (disable) return;

  const list = document.getElementsByClassName(
    className,
  )[0] as HTMLUListElement;
  const items = list.childNodes;
  const slider = list.parentNode as HTMLDivElement;
  slider.classList.add('slider-wrapper');

  const totalItems = list.childElementCount;
  let totalSlides = Math.ceil(totalItems / itemsToSwipe);

  const sliderWidth = slider.clientWidth;
  const elementWidth =
    itemWidth || (sliderWidth - gap * (itemsToShow - 1)) / itemsToShow;

  // Update slider if infinite mode set to true
  // Set current dot if infinite mode set to false
  if (infinite) {
    addCopies();

    if (currentSlide === 1) {
      infiniteSwipeItems(currentSlide + itemsToShow / itemsToSwipe);
    }
  } else {
    setCurrentDot(currentSlide);
  }

  // Add necessary styles
  addListStyles();

  // Add wrapper for navigation buttons in slider if dots or arrows set to true
  let sliderNav = document.getElementsByClassName(`${className}_slider-nav`)[0];
  if ((arrows || dots) && !sliderNav) {
    sliderNav = document.createElement('div');
    sliderNav.classList.add(`${className}_slider-nav`, 'slider-nav');
    slider.append(sliderNav);
  }

  // Add dots if configured
  const dotsWrapper = slider.getElementsByClassName('dots_wrapper');
  if (dots && !dotsWrapper.length) sliderNav?.append(addDots());

  // Add arrows if configured
  const arrowsWrapper = slider.getElementsByClassName('arrows_wrapper');
  if (arrows && !arrowsWrapper.length) sliderNav?.append(addArrows());

  // Set autoplay if configured. Use infinite swipe mode or normal depends on configurations
  if (autoplay) {
    let id: NodeJS.Timeout;
    const step = autoplayDirection === 'right' ? 1 : -1;

    id = setInterval(
      () =>
        infinite
          ? infiniteSwipeItems(currentSlide + step)
          : swipeItems(currentSlide + step),
      autoplaySpeed,
    );

    if (pauseOnHover) {
      list.addEventListener('mouseover', () => clearInterval(id));

      list.addEventListener('mouseleave', () => {
        id = setInterval(
          () =>
            infinite
              ? infiniteSwipeItems(currentSlide + step)
              : swipeItems(currentSlide + step),
          autoplaySpeed,
        );
      });
    }

    return id;
  }

  /**
   * Looking for new configs depends on screen width and update options for slider.
   */
  function updateOptions() {
    const updatedConfigs = responsive.reduce((prevValue, config) => {
      if (
        mobileFirst
          ? config.breakpoint <= window.screen.width
          : config.breakpoint >= window.screen.width
      ) {
        return { ...prevValue, ...config.settings };
      } else {
        return prevValue;
      }
    }, {});

    options = {
      ...options,
      ...updatedConfigs,
    };
  }

  /**
   * Creates copy of the first slide and the last one. Insert copies to list.
   * Last slide copy goes to beginning. First slide goes to the end.
   *
   * @returns void
   */
  function addCopies(): void {
    // Check if copies already exist and quit the function if so.
    const copy = list.getElementsByClassName('item-copy');
    if (copy.length) {
      return;
    }

    // Create arrays for copies
    const afterbegin: Node[] = [];
    const beforeend: Node[] = [];

    // Go through all items inside list, cloning necessary items and pushing them to appropriate array
    for (let i = 0; i < items.length; i += 1) {
      if (i < itemsToShow) {
        const clone = items[i].cloneNode(true) as HTMLLIElement;
        clone.classList.add('item-copy');
        beforeend.push(clone);
      }

      if (i >= items.length - itemsToShow) {
        const clone = items[i].cloneNode(true) as HTMLLIElement;
        clone.classList.add('item-copy');
        afterbegin.push(clone);
      }
    }

    // Insert copies to list
    list.prepend(...afterbegin);
    list.append(...beforeend);

    // Update totalSlides after insertion of copies
    totalSlides = Math.ceil(
      // list.childElementCount / itemsToSwipe - itemsToShow,
      list.childElementCount / itemsToSwipe - (itemsToShow - itemsToSwipe),
    );
  }

  /**
   * Add compulsory styles to list
   */
  function addListStyles() {
    slider.style.overflow = 'hidden';
    list.classList.add('slider_list');
    list.style.display = 'flex';
    list.style.gap = `${gap}px`;
    list.style.width = `${(elementWidth + gap) * items.length - gap}px`;

    for (let i = 0; i < items.length; i += 1) {
      const element = items[i] as HTMLLIElement;
      element.style.width = `${elementWidth}px`;
    }

    if (!infinite) {
      setTransition();
    }
  }

  /**
   * Create div element with two buttons inside
   *
   * @returns div element with arrows
   */
  function addArrows() {
    // Create and fulfill button to go back
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('prev_button');
    prevBtn.type = 'button';
    prevBtn.ariaLabel = 'Go to previous slide';
    prevArrow
      ? prevBtn.append(prevArrow)
      : prevBtn.insertAdjacentHTML(
          'afterbegin',
          '<svg id="icon-arrow-left" viewBox="0 0 31 32"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.1818" d="M27.151 16.215h-23.273M3.879 16.215l10.99 10.991M3.879 16.215l10.99-10.989"></path></svg>',
        );
    prevBtn.addEventListener('click', () =>
      infinite
        ? infiniteSwipeItems(currentSlide - 1)
        : swipeItems(currentSlide - 1),
    );
    prevBtn.disabled = !infinite;

    // Create and fulfill button to go forward
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next_button');
    nextBtn.type = 'button';
    nextBtn.ariaLabel = 'Go to next slide';
    nextArrow
      ? nextBtn.append(nextArrow)
      : nextBtn.insertAdjacentHTML(
          'afterbegin',
          '<svg id="icon-arrow-right" viewBox="0 0 31 32"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.1818" d="M3.879 16.215h23.273M27.151 16.215l-10.99-10.99M27.151 16.215l-10.99 10.99"></path></svg>',
        );
    nextBtn.addEventListener('click', () =>
      infinite
        ? infiniteSwipeItems(currentSlide + 1)
        : swipeItems(currentSlide + 1),
    );

    // Create div element and fulfill it with recently created buttons
    const arrowsWrapper = document.createElement('div');
    arrowsWrapper.classList.add('arrows_wrapper');
    arrowsWrapper.append(prevBtn, nextBtn);

    return arrowsWrapper;
  }

  /**
   * Create div element with dots for navigation between slides
   *
   * @returns div element with dots
   */
  function addDots() {
    // Create div element for dots
    const dotsWrapper = document.createElement('div');
    dotsWrapper.classList.add('dots_wrapper');
    dotsWrapper.style.display = 'flex';

    // NOT SURE FOR BELOW!!! NEED TO CHECK ON DIFFERENT "itemsToShow" AND "itemsToSwipe" CONFIGS
    // AS WELL AS WITH DIFFERENT AMOUNT OF ITEMS!!!
    const indexToStart = (itemsToShow / itemsToSwipe) % 2 === 0 ? 1 : 0;
    const correctionForSwipe = indexToStart === 1 ? 0 : 1;
    const indexToStop = infinite
      ? totalSlides - (itemsToShow / itemsToSwipe) * 2
      : totalSlides;

    for (let i = indexToStart; i < indexToStop; i += 1) {
      const dot = document.createElement('div');

      dot.addEventListener('click', () => {
        infinite
          ? infiniteSwipeItems(
              i + correctionForSwipe + itemsToShow / itemsToSwipe,
            )
          : swipeItems(i + correctionForSwipe);
      });

      dotsWrapper.append(dot);
    }

    return dotsWrapper;
  }

  /**
   * Swiping slider to passed slide number. NORMAL MODE!
   *
   * @param slideToShow slide number for swiping to.
   */
  function swipeItems(slideToShow: number) {
    // NOT SURE FOR BELOW!!! NEED TO CHECK ON DIFFERENT "itemsToShow" AND "itemsToSwipe" CONFIGS
    // AS WELL AS WITH DIFFERENT AMOUNT OF ITEMS!!!

    // Check if slider went to the end on going forward and set slide to 1.
    // If false check if slider went to the very beginning on going backward and set slider close to the end.
    // If false set the current slide to the number that have been passed.
    if (
      (itemsToShow / itemsToSwipe) % 2 === 0
        ? slideToShow === totalSlides
        : slideToShow > totalSlides
    ) {
      currentSlide = 1;
    } else if (slideToShow < 1) {
      const slidesToSkip = itemsToShow / itemsToSwipe === 1 ? 0 : 1;
      currentSlide = totalSlides - slidesToSkip;
    } else {
      currentSlide = slideToShow;
    }

    // Move the slider and update current active dot
    setTransform();
    setCurrentDot(currentSlide);

    // Disable appropriate arrow button if slider reached his beginning or end
    if (arrows) {
      const prevBtn = slider.getElementsByClassName(
        'prev_button',
      )[0] as HTMLButtonElement;
      const nextBtn = slider.getElementsByClassName(
        'next_button',
      )[0] as HTMLButtonElement;
      prevBtn.disabled = currentSlide === 1;
      nextBtn.disabled =
        (itemsToShow / itemsToSwipe) % 2 === 0
          ? slideToShow === totalSlides - 1
          : slideToShow === totalSlides;
    }
  }

  /**
   * Swiping slider to passed slide number. INFINITE MODE!
   *
   * @param slideToShow slide number for swiping to.
   */
  function infiniteSwipeItems(slideToShow: number) {
    // Set transition effect for animation.
    setTransition();
    currentSlide = slideToShow;

    // Move the slider and update current active dot
    setTransform();
    setCurrentDot(currentSlide - itemsToShow / itemsToSwipe);

    // Check if slider went to the very beginning or very end,
    // disable animation and switching slide from the end to beginning or from the beginning to end.
    // Switching conducted after previous animation completed.
    if (
      slideToShow ===
        totalSlides - ((itemsToShow / itemsToSwipe) % 2 === 0 ? 1 : 0) ||
      slideToShow <= 1
    ) {
      // Setting timeout for the same time as animation speed to switch slides right after animation completes.
      setTimeout(() => {
        clearTransition(); // disable animation

        if (
          slideToShow ===
          totalSlides - ((itemsToShow / itemsToSwipe) % 2 === 0 ? 1 : 0)
        ) {
          currentSlide = 1 + itemsToShow / itemsToSwipe;
        }

        // NOT SURE FOR BELOW!!! NEED TO CHECK ON DIFFERENT "itemsToShow" AND "itemsToSwipe" CONFIGS
        // AS WELL AS WITH DIFFERENT AMOUNT OF ITEMS!!!
        if (slideToShow <= 1) {
          const slidesToSkip =
            itemsToShow / itemsToSwipe === 1 ? 1 : itemsToShow / itemsToSwipe;

          currentSlide = totalSlides - slidesToSkip;
        }

        // switching slide without animation and update current active dot.
        setTransform();
        setCurrentDot(currentSlide - itemsToShow / itemsToSwipe);
      }, speed);
    }
  }

  /**
   * Set aria-current attribute to "true" for the current active dot and unset it for previous one.
   *
   * @param currentDot dot number to set as current
   */
  function setCurrentDot(currentDot: number) {
    const dotsWrapper = slider.getElementsByClassName('dots_wrapper')[0];
    const dotDivs = dotsWrapper?.childNodes;

    if (dotDivs) {
      for (let i = 0; i < dotDivs.length; i += 1) {
        const dot = dotDivs[i] as HTMLDivElement;
        dot.ariaCurrent = i + 1 === currentDot ? 'true' : 'false';
      }
    }
  }

  /**
   * Moves slider to the current slide
   */
  function setTransform() {
    list.style.transform = `translateX(-${
      (elementWidth + gap) * (currentSlide - 1) * itemsToSwipe
    }px)`;
  }

  /**
   * Set transition effect for slider animation
   */
  function setTransition() {
    list.style.transition = `transform ${speed}ms ease`;
  }

  /**
   * Removes transition effect to disable animation
   */
  function clearTransition() {
    list.style.transition = '';
  }
};

export default slider;
