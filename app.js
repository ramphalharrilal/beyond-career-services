document.addEventListener('submit', function (event) {
  const form = event.target.closest('.contact-form');
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  const value = (key, fallback = '') => {
    const entry = data.get(key);
    return typeof entry === 'string' && entry ? entry : fallback;
  };
  const subject = encodeURIComponent('Website inquiry from ' + value('name'));
  const body = encodeURIComponent(
    'Name: ' + value('name') + '\n' +
    'Email: ' + value('email') + '\n' +
    'Phone: ' + value('phone', 'Not provided') + '\n' +
    'Support needed: ' + value('support', 'General inquiry') + '\n\n' +
    'Message:\n' + value('message')
  );
  const status = form.querySelector('.form-status');
  if (status) status.textContent = 'Your email app is opening with your message ready to send.';
  window.location.href = 'mailto:beyondcareerservices0@gmail.com?subject=' + subject + '&body=' + body;
});
