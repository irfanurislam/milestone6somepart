/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 



৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 



.

৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

 */

const array1 = [7, 14, 21, 28, 35, 42, 49, 56];
const total = array1.map(a => a / 7);
console.log(total);

array1.forEach(b => console.log(b));

const now = array1.filter(b => b < 10);
console.log(now);
const fitl = array1.find(c => c > 10);
console.log(fitl);

// 6

const bus = {
    firs: 'no',

    two: 'go',
    thre: 'left',
    four: 'tour'

}

const {firs,two} = bus;

