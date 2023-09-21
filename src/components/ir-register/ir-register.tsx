import { Component, Event, EventEmitter, State, h } from '@stencil/core';
import { IRegister } from '../../model/Register';

@Component({
  tag: 'ir-register',
})
export class IrRegister {
  @State() username: string;
  @State() password: string;
  @State() email: string;
  @Event({ composed: true, bubbles: true }) registerClicked: EventEmitter<IRegister>;
  @Event({ composed: true, bubbles: true }) linkLoginClicked: EventEmitter<any>;

  usernameRef: HTMLElement;
  passwordRef: HTMLElement;
  emailRef: HTMLElement;
  formRef: HTMLFormElement;

  componentDidLoad() {
    this.addEventListeners();
  }
  handleClick() {
    this.linkLoginClicked.emit();
  }

  addEventListeners() {
    this.usernameRef.addEventListener('ontextchange', this.handleUsernameChange.bind(this));
    this.passwordRef.addEventListener('ontextchange', this.handlePasswordChange.bind(this));
    this.emailRef.addEventListener('ontextchange', this.handleEmailChange.bind(this));
  }

  handleUsernameChange(e: CustomEvent) {
    this.username = e.detail;
  }

  handlePasswordChange(e: CustomEvent) {
    this.password = e.detail;
  }

  handleEmailChange(e: CustomEvent) {
    this.email = e.detail;
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();
    this.emitRegisterData();
  }

  emitRegisterData() {
    this.registerClicked.emit({
      email: this.email,
      password: this.password,
      username: this.username,
    });
    this.formRef.reset();
  }
  render() {
    return (
      <section class="card">
        <ir-card-header class="card-header border-0" image-source="../../../app-assets/images/logo/logo-dark.png" image-alt-text="branding logo" header-title="Create Account" />
        <div class="card-content">
          <div class="card-body">
            <form ref={el => (this.formRef = el)} class="form-horizontal form-simple" novalidate onSubmit={this.handleFormSubmit.bind(this)}>
              <ir-input ref={el => (this.usernameRef = el)} type="text" icon="la la-user" placeholder="User Name" container-style="mb-1" />
              <ir-input ref={el => (this.emailRef = el)} type="text" icon="la la-envelope" placeholder="Your Email Address" required container-style="mb-1" />
              <ir-input ref={el => (this.passwordRef = el)} type="password" icon="la la-key" placeholder="Enter Password" required />

              <ir-button class="btn-block" type="submit" icon="ft-unlock" button-style="btn-block" button-title=" Register" color-variant="info" />
            </form>
          </div>
          <p class="text-center">
            Already have an account ? <ir-link onClick={this.handleClick.bind(this)} link-title="Log in" link-destination="#" />
          </p>
        </div>
      </section>
    );
  }
}
