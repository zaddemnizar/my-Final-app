import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component'
import './Checkout.extension.style.scss'

class Checkout extends SourceCheckout {

  ProgressBar() {
      const checkoutStep = this.props.checkoutStep;

      return (
        <div className='progressBarContainer'>

          <div className='borderLine'>
            <div className='inactive'/>
            <div className='active' style={{'width': '100%'}}/>
          </div>

          <div className='step'>
            <div className='numberActive'>{checkoutStep === "SHIPPING_STEP" ? "1" : "✓"}</div>
            <div className='stepName'>Shipping</div>
          </div>
                  
          <div className='middleLine'>
            <div className='inactive'/>
            <div className='active' style={checkoutStep === "SHIPPING_STEP" ? {'width': '0%'} : {'width': '100%'}}/>
          </div>
          <div className='step'>
            <div className={checkoutStep === "SHIPPING_STEP" ? 'numberInactive' : 'numberActive'}>
              {checkoutStep !== "DETAILS_STEP" ? "2" : "✓"}
            </div>
            <div className='stepName'>Review & Payments</div>
          </div>
                 
          <div className='borderLine'>
            <div className='inactive'/>
            <div className='active' style={checkoutStep !== "DETAILS_STEP" ?  {'width': '0%'} : {'width': '100%'}}/>
          </div>
        </div>
      );
  };
  render() {
    return (
        <main block="Checkout">
          {this.ProgressBar()}
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
            >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
    );
}
}

export default Checkout;