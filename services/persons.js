const persons = [{
    id: 1,
    mugShot: require('~/assets/images/angular.jpg'),
    name: 'Nathan',
    role: 'Financial Consultant',
    about: {
      bio: 'I am a Financial Advisor with 17 years’ experience in financial advisory and investment management. I craft for my clients a comprehensive financial plan that helps them identify their objectives and then execute investment and tax strategies that are: 1) Personalized 2) Risk Managed 3) Tax-Efficient and 4) Highly Predictable.',
      bio2: 'I can provide significant investment experience to my clients due to my many years as a professional money manager. As a portfolio manager, I was responsible for a multi-asset class high-income portfolio that utilized dividend-paying stocks, real estate, foreign and domestic corporate bonds, and municipal bonds providing an uncommonly high level of current income along with a unique risk management technique. Furthermore, as a senior leader within the multi-asset class portfolio management team, I provided ongoing investment advice to large public corporations, university endowments, and pension plans.'
    }
  }],

  export function getPersons() {
    return persons;
  }
