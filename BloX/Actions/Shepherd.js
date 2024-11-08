//Title Shepherd 

const tour = new Shepherd.Tour({
    useModalOverlay: true,
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'class-1 class-2',
    scrollTo: { behavior: 'smooth', block: 'center' }
  }
});

tour.addStep({
  title: 'Widget Title',
  text: `Creating a Shepherd tour is easy.
  Just create a \`Tour\` instance, and add as many steps as you want.
  <br><br>
  This is the name of the dashboard.`,
  attachTo: {
    element: 'div.transput-caption.editable',
    on: 'bottom'
  },
  buttons: [
    {
      action() {
        return this.complete();
      },
      classes: 'shepherd-button-secondary',
      text: 'skip'
    },
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'creating'
});

tour.addStep({
  title: 'Adding a widget',
  text: `Clicking this button will add a widget to the dashboard. Try it.`,
  attachTo: {
    element: '.btn.btn--new-widget.js--btn-action.js--btn-new-widget',
    on: 'bottom'
  },
  advanceOn: '.uc-ok click',
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'creating3'
});

tour.addStep({
  title: 'Filter',
  text: `This third step will hightlight your first filter, but if you haven't
  added one yet it will just center on the screen.`,
  attachTo: {
    element: '.ew-item',
    on: 'bottom'
  },
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'creating4'
});

tour.start();

{
    "type": "Shepherd",
    "title": "Shepherd"
  }