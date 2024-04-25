// Part A - Add expired property to coupons
const couponsPartA = [
  {
    code: "SALE1",
    title: "25% off",
    discount: 0.25,
    expiresAt: 1265713200000,
  },
  {
    code: "SALE2",
    title: "15% off",
    discount: 0.15,
    expiresAt: 1297249200000,
  },
  {
    code: "SALE3",
    title: "10% off",
    discount: 0.1,
    expiresAt: 3790321200000,
  },
  {
    code: "SALE4",
    title: "20% off",
    discount: 0.2,
    expiresAt: 7261527600000,
  },
];

const coupon1 = couponsPartA[0];
coupon1.expired = coupon1.expiresAt > new Date().getTime();

// Add the expired property to the other three coupons below
// use the same value for the expired property in the example above
const coupon2 = couponsPartA[1];
coupon2.expired = coupon2.expiresAt > new Date().getTime();
const coupon3 = couponsPartA[2];
coupon3.expired = coupon3.expiresAt > new Date().getTime();
const coupon4 = couponsPartA[3];
coupon4.expired = coupon4.expiresAt > new Date().getTime();
// Part B - For loop
const couponsPartB = [
  {
    code: "SALE1",
    title: "15% off",
    discount: 0.15,
    expiresAt: 4105854000000,
  },
  {
    code: "SALE2",
    title: "5% off",
    discount: 0.05,
    expiresAt: 950094000000,
  },
  {
    code: "SALE3",
    title: "10% off",
    discount: 0.1,
    expiresAt: 2528017200000,
  },
  {
    code: "SALE4",
    title: "10% off",
    discount: 0.1,
    expiresAt: 981716400000,
  },
];

// Loop over the couponsPartB array to add the discount property name
for (let index = 0; index < couponsPartB.length; index++) {
  const coupon = couponsPartB[index];
  coupon.expired = coupon.expiresAt > new Date().getTime();
}
// Part C - For...of loop
const couponsPartC = [
  {
    code: "SALE1",
    title: "15% off",
    discount: 0.15,
    expiresAt: 4105854000000,
  },
  {
    code: "SALE2",
    title: "5% off",
    discount: 0.05,
    expiresAt: 950094000000,
  },
  {
    code: "SALE3",
    title: "10% off",
    discount: 0.1,
    expiresAt: 2528017200000,
  },
  {
    code: "SALE4",
    title: "10% off",
    discount: 0.1,
    expiresAt: 981716400000,
  },
];

// Loop over the couponsPartC array to add the discount property name
for (const coupon of couponsPartC) {
  coupon.expired = coupon.expiresAt > new Date().getTime();
}
