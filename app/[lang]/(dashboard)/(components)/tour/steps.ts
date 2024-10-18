type TourContext = {
  complete: () => void;
  next: () => void;
  back: () => void;
};

type Step = {
  id: string;
  attachTo: {
    element: string;
    on: 'top' | 'bottom' | 'left' | 'right';
  };
  beforeShowPromise?: () => Promise<void>;
  buttons: {
    text: string;
    classes: string;
    action(this: TourContext): void;
  }[];
  title: string;
  text: string | string[];
};


const steps:Step[] = [
  {
    id: "intro",
    attachTo: { element: "#logo-tour", on: "bottom" },
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        text: "Skip",
        classes: "btn btn-warning",
        action() {
          return this.complete();
        },
      },
      {
        classes: "btn btn-success",
        text: "Next",
        action() {
          return this.next();
        },
      },
    ],
    title: "Welcome Back !",
    text: ["This is Step 1"],
  },

  {
    id: "intro1",
    attachTo: { element: "#register-tour", on: "left" },

    buttons: [
      {
        text: "Back",
        classes: "btn btn-light",
        action() {
          return this.back();
        },
      },
      {
        text: "Skip",
        classes: "btn btn-warning",
        action() {
          return this.complete();
        },
      },
      {
        text: "Next",
        classes: "btn btn-success",
        action() {
          return this.next();
        },
      },
    ],
    title: "Register your account",
    text: "Get your Free DashTail account now.",
  },
  {
    id: "intro2",
    attachTo: { element: "#login-tour", on: "bottom" },
    buttons: [
      {
        text: "Back",
        classes: "btn btn-light",
        action() {
          return this.back();
        },
      },
      {
        text: "Skip",
        classes: "btn btn-warning",
        action() {
          return this.complete();
        },
      },
      {
        text: "Next",
        classes: "btn btn-success",
        action() {
          return this.next();
        },
      },
    ],
    title: "Login your account",
    text: "Sign in to continue to DashTail.",
  },
  {
    id: "intro3",
    attachTo: { element: "#getproduct-tour", on: "bottom" },
    buttons: [
      {
        text: "Back",
        classes: "btn btn-light",
        action() {
          return this.back();
        },
      },
      {
        text: "Skip",
        classes: "btn btn-warning",
        action() {
          return this.complete();
        },
      },
      {
        text: "Next",
        classes: "btn btn-success",
        action() {
          return this.next();
        },
      },
    ],
    title: "Get yout Product",
    text: "Sign in to continue to DashTail.",
  },
  {
    id: "intro4",
    attachTo: { element: "#thankyou-tour", on: "top" },
    buttons: [
      {
        text: "Back",
        classes: "btn btn-light",
        action() {
          return this.back();
        },
      },
      {
        text: "Thank you !",
        classes: "btn btn-primary",
        action() {
          return this.complete();
        },
      },
    ],
    title: "Thank you !",
    text: "Sign in to continue to DashTail.",
  },
];

export default steps;
