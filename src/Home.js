import React from 'react';
import yellowYarn from './purple_yarn.svg';

function Home() {
  return (
    <div className="Home">
      <h1>Crochet Club DIA</h1>
      <div className="flex">
        <img src={yellowYarn} alt="ball of yellow yarn" />
        <p>The Crochet Club at DIA is all about having fun with yarn and making a positive impact on our community. Our project, "From Crochet to Charity," is an initiative started by a group of Year 11 students who want to use their crochet skills to make a difference. We're excited to create a variety of crocheted products that you can buy at our events throughout the year. The money we make from these sales will be donated to different charities in the UAE.</p>
      </div>
    </div>
  );
}

export default Home;