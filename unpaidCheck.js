const wkmnPayStyles = `
.wkmn-pay {
      font-size: 16px!important;
     font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
     font-feature-settings: normal;
     font-variation-settings: normal;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-container {
background-color: #ececec;
z-index: 999;
padding: 1.5rem;
border-radius: 1rem;
color: #333;
}
.error-container h1 {
  font-size: 2.3rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.error-container p.wkmnPayMessage {
  font-size: 1.25rem;
}
.error-container p.wkmnPayOwner {
  margin-top: 0.75rem;
  color: #666;
}
.error-container a {
  color: #333;
  text-decoration: none;
  border-bottom: 2px solid #000;
}
.error-container a:hover {
  color: #333;
  border-bottom-color: #333;
}`;

function isPastDue() {
    const mainPay = document.createElement('main');
    mainPay.classList.add('wkmn-pay');
    const errorContainerPay = document.createElement('div');
    errorContainerPay.classList.add('error-container');
    const wkmnPayh1 = document.createElement('h1');
    wkmnPayh1.innerText = 'Uh Oh!';
    const wkmnPayMessage = document.createElement('p');
    wkmnPayMessage.classList.add('wkmnPayMessage');
    wkmnPayMessage.innerText = 'We can\'t display this site at the moment. Please check back later.';
    const wkmnPayOwner = document.createElement('p');
    wkmnPayOwner.classList.add('wkmnPayOwner');
    wkmnPayOwner.innerText = 'If you are the wkmnPayOwner of this site please click ';
    const link = document.createElement('a');
    link.href = 'https://www.wkmn.dev/contact';
    link.innerText = 'here';
    const styles = document.createElement('style');
    styles.innerText = wkmnPayStyles;
    document.head.appendChild(styles);
    wkmnPayOwner.appendChild(link);
    errorContainerPay.appendChild(wkmnPayh1);
    errorContainerPay.appendChild(wkmnPayMessage);
    errorContainerPay.appendChild(wkmnPayOwner);
    mainPay.appendChild(errorContainerPay);
    document.querySelector('.wkmn-bg-animated').classList.remove('hidden');
    document.body.appendChild(mainPay);
    }
