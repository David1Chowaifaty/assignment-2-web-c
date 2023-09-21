import { Component, Event, EventEmitter, Host, Listen, State, h } from '@stencil/core';
import { ILogin } from '../../model/Login';
import { IRegister } from '../../model/Register';

@Component({
  tag: 'ir-login',
})
export class IrLogin {
  @State() username: string;
  @State() password: string;
  @State() isChecked: boolean = false;
  @State() isSidebarOpened: boolean = false;

  @Event({ composed: true, bubbles: true }) loginClicked: EventEmitter<ILogin>;
  @Event({ composed: true, bubbles: true }) loginRegisterClicked: EventEmitter<IRegister>;

  usernameRef: HTMLElement;
  passwordRef: HTMLElement;
  checkboxRef: HTMLElement;
  sidebarRef: HTMLElement;
  formRef: HTMLFormElement;
  componentDidLoad() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.usernameRef.addEventListener('ontextchange', this.updateUsername.bind(this));
    this.passwordRef.addEventListener('ontextchange', this.updatePassword.bind(this));
    this.checkboxRef.addEventListener('oncheckchange', this.updateCheckboxStatus.bind(this));
  }

  @Listen('irSidebarToggle')
  handleSidebarToggle() {
    this.toggleSidebar();
  }

  @Listen('linkLoginClicked')
  handleLoginClick() {
    this.toggleSidebar();
  }

  @Listen('registerClicked')
  handleRegisterClick(e: CustomEvent) {
    this.loginRegisterClicked.emit(e.detail);
    this.toggleSidebar();
  }

  updateUsername(e: CustomEvent) {
    this.username = e.detail;
  }

  updatePassword(e: CustomEvent) {
    this.password = e.detail;
  }

  updateCheckboxStatus(e: CustomEvent) {
    this.isChecked = e.detail;
  }

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();
    this.emitLoginData();
    this.formRef.reset();
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
      <Host>
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
                          <form ref={el => (this.formRef = el)} class="form-horizontal form-simple" novalidate onSubmit={this.handleFormSubmit.bind(this)}>
                            <ir-input ref={el => (this.usernameRef = el)} type="text" icon="la la-user" placeholder="Your Username" required container-style="mb-0" />
                            <ir-input ref={el => (this.passwordRef = el)} type="password" icon="la la-key" placeholder="Enter Password" required />
                            <div class="form-group row">
                              <div class="col-sm-6 col-12 text-center text-sm-left">
                                <ir-checkbox ref={el => (this.checkboxRef = el)} label="Remember Me" input-id="remember-me" checkbox-style="chk-remember" />
                              </div>

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
                            New to Moden Admin? <ir-link onClick={this.toggleSidebar.bind(this)} link-title="Sign Up" link-destination="#" />
                          </p>
                        </div>
                      </div>
                      <ir-sidebar ref={el => (this.sidebarRef = el)} open={this.isSidebarOpened}>
                        <ir-register></ir-register>
                      </ir-sidebar>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
