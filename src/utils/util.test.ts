import {getOrdersHash} from './util';

describe('Tab Panel Content List', () => {
  it('return object of orders', () => {
    const orderList = [
      {
        customer: 'Amanda Roberts',
        destination: '759 Thompson Union, East Natalie, CA 96079',
        event_name: 'CREATED',
        id: '188af307',
        item: 'Chicken kabob',
        price: 8850,
        sent_at_second: 297,
      },
      {
        customer: 'Russell Lopez',
        destination: '015 Vaughan Ports, New Rebeccamouth, CA 90657',
        event_name: 'CREATED',
        id: 'b4159e25',
        item: 'Pesto pasta',
        price: 2782,
        sent_at_second: 302,
      }
    ];

    const expectedResult = {
      '188af307': {
        customer: 'Amanda Roberts',
        destination: '759 Thompson Union, East Natalie, CA 96079',
        event_name: 'CREATED',
        id: '188af307',
        item: 'Chicken kabob',
        price: 8850,
        sent_at_second: 297,
      },
      'b4159e25': {
        customer: 'Russell Lopez',
        destination: '015 Vaughan Ports, New Rebeccamouth, CA 90657',
        event_name: 'CREATED',
        id: 'b4159e25',
        item: 'Pesto pasta',
        price: 2782,
        sent_at_second: 302,
      },
    };

    const acctualResult = getOrdersHash(orderList);

    expect(expectedResult).toEqual(acctualResult);
  });

  it('return updated object of orders', () => {
    const orderList = [
      {
        "customer": "Amanda Roberts",
        "destination": "759 Thompson Union, East Natalie, CA 96079",
        "event_name": "COOKED",
        "id": "188af307",
        "item": "Chicken kabob",
        "price": 8850,
        "sent_at_second": 307
      },
      {
        "customer": "Amy Mckinney",
        "destination": "287 Brandy Freeway, East Richardtown, CA 93568",
        "event_name": "DELIVERED",
        "id": "22472330",
        "item": "Deluxe cheeseburger",
        "price": 1325,
        "sent_at_second": 313
      }
    ];

    const expectedResult = {
      '188af307': {
        "customer": "Amanda Roberts",
        "destination": "759 Thompson Union, East Natalie, CA 96079",
        "event_name": "COOKED",
        "id": "188af307",
        "item": "Chicken kabob",
        "price": 8850,
        "sent_at_second": 307
      },
      'b4159e25': {
        customer: 'Russell Lopez',
        destination: '015 Vaughan Ports, New Rebeccamouth, CA 90657',
        event_name: 'CREATED',
        id: 'b4159e25',
        item: 'Pesto pasta',
        price: 2782,
        sent_at_second: 302,
      },
      '22472330': {
        "customer": "Amy Mckinney",
        "destination": "287 Brandy Freeway, East Richardtown, CA 93568",
        "event_name": "DELIVERED",
        "id": "22472330",
        "item": "Deluxe cheeseburger",
        "price": 1325,
        "sent_at_second": 313
      }
    };

    const acctualResult = getOrdersHash(orderList);

    expect(expectedResult).toEqual(acctualResult);
  });
});
