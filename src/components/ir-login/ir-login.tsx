import { Component, Event, EventEmitter, State, h } from '@stencil/core';
import { ILogin } from '../../model/Login';

@Component({
  tag: 'ir-login',
})
export class IrLogin {
  handleClick() {}

  @State() username: string;
  @State() password: string;
  @State() isChecked: boolean = false;

  @Event({ composed: true, bubbles: true }) loginClicked: EventEmitter<ILogin>;

  usernameRef: HTMLElement;
  passwordRef: HTMLElement;
  checkboxRef: HTMLElement;

  componentDidLoad() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.usernameRef.addEventListener('ontextchange', this.handleUsernameChange.bind(this));
    this.passwordRef.addEventListener('ontextchange', this.handlePasswordChange.bind(this));
    this.checkboxRef.addEventListener('oncheckchange', this.handleCheckboxChange.bind(this));
  }

  handleUsernameChange(e: CustomEvent) {
    this.username = e.detail;
  }

  handlePasswordChange(e: CustomEvent) {
    this.password = e.detail;
  }

  handleCheckboxChange(e: CustomEvent) {
    this.isChecked = e.detail;
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();
    this.emitLoginData();
  }

  emitLoginData() {
    this.loginClicked.emit({
      isChecked: this.isChecked,
      password: this.password,
      username: this.username,
    });
  }
  render() {
    return (
      <div class="app-content container center-layout mt-2">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <div class="content-body">
            <section class="row flexbox-container">
              <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                  <div class="card border-grey border-lighten-3 m-0">
                    <ir-card-header
                      class="card-header border-0"
                      image-source="../../../app-assets/images/logo/logo-dark.png"
                      image-alt-text="branding logo"
                      header-title="Login with Modern"
                    />
                    <div class="card-content">
                      <div class="card-body">
                        <form class="form-horizontal form-simple" novalidate onSubmit={this.handleFormSubmit.bind(this)}>
                          <ir-input ref={el => (this.usernameRef = el)} type="text" icon="la la-user" placeholder="Your Username" required container-style="mb-0" />
                          <ir-input ref={el => (this.passwordRef = el)} type="password" icon="la la-key" placeholder="Enter Password" required />
                          <div class="form-group row">
                            <ir-checkbox
                              ref={el => (this.checkboxRef = el)}
                              class="col-sm-6 col-12 text-center text-sm-left"
                              label=" Remember Me"
                              input-id="remember-me"
                              checkbox-style="chk-remember"
                            />
                            <div class="col-sm-6 col-12 text-center text-sm-right">
                              <ir-link link-title="Forgot Password?" link-destination="#" />
                            </div>
                          </div>
                          <ir-button class="btn-block" type="submit" icon="ft-unlock" button-style="btn-block" button-title=" Login" color-variant="info" />
                        </form>
                      </div>
                    </div>

                    <div class="card-footer">
                      <div class="">
                        <p class="float-xl-left text-center m-0">
                          <ir-link link-title=" Recover password" link-destination="#" />
                        </p>
                        <p class="float-xl-right text-center m-0">
                          New to Moden Admin? <ir-link onClick={this.handleClick.bind(this)} link-title="Sign Up" link-destination="#" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
