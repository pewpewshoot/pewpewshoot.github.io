const countElement = document.querySelector('.count');
const channelId = 'UCXLSJ5exAFpFEA-hqKBC3Bw'; // Replace with your channel ID

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyB2aEdTAD5bXS15lbBYB7V7w1FFDVKrHtE`)
  .then(response => response.json())
  .then(data => {
    const subscriberCount = data.items[0].statistics.subscriberCount;
    countElement.textContent = subscriberCount;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
