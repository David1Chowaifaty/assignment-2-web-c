import { Component, h } from '@stencil/core';

@Component({
  tag: 'ir-register',
})
export class IrRegister {
  usernameRef: HTMLElement;
  passwordRef: HTMLElement;
  emailRef: HTMLElement;
  handleClick() {}
  render() {
    return (
      <div class="app-content container center-layout mt-2">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <div class="content-header row"></div>
          <div class="content-body">
            <section class="row flexbox-container">
              <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                  <div class="card border-grey border-lighten-3 px-2 py-2 m-0">
                    <ir-card-header
                      class="card-header border-0"
                      image-source="../../../app-assets/images/logo/logo-dark.png"
                      image-alt-text="branding logo"
                      header-title="Create Account"
                    />
                    <div class="card-content">
                      <div class="card-body">
                        <form class="form-horizontal form-simple" action="index.html" novalidate>
                          <ir-input ref={el => (this.usernameRef = el)} type="text" icon="la la-user" placeholder="User Name" container-style="mb-1" />
                          <ir-input ref={el => (this.emailRef = el)} type="text" icon="la la-envelope" placeholder="Your Email Address" required container-style="mb-1" />
                          <ir-input ref={el => (this.passwordRef = el)} type="password" icon="la la-key" placeholder="Enter Password" required />

                          <ir-button class="btn-block" type="submit" icon="ft-unlock" button-style="btn-block" button-title=" Register" color-variant="info" />
                        </form>
                      </div>
                      <p class="text-center">
                        Already have an account ? <ir-link onClick={this.handleClick.bind(this)} link-title="LogIn" link-destination="#" />
                      </p>
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
