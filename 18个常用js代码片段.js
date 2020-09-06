var arr=[1,2,3,4,5,6,7];
var arr2=[1,1,1,1,1,1,1];
arr3=[1,undefined,2,false,3,null,4,NaN,5,0,''];
var str="abcdefg";
// 1.这一函数可以返回一个数组的最大值。

const maxItemOfArray=arr=>[...arr].sort((a,b)=>b-a).slice(0,1)[0];
console.log(maxItemOfArray(arr));

// 2.这段代码可以检查数组的所有项是否相等。
const areAllEqual=arr=>[...arr].every(item=>item===arr[0]);
console.log(areAllEqual(arr2));

// 3.这一片段可以返回给定数的平均数。
const averageOf=arr=>[...arr].reduce((acc,item)=>acc+item,0)/arr.length;
console.log(averageOf(arr));

// 4.这段代码可反转字符串。
const reverseString=str=>[...str].reverse().join('');
console.log(reverseString(str));

// 5.这段代码可以返回给定数的和。
const sumOf=arr=>[...arr].reduce((acc,item)=>acc+item);
console.log(sumOf(arr));

// 6.这段代码可以在字符串中查找给定单词，并且替换为另一词汇。
const findAndReplace=(str,wordToFind,wordToReplace)=>{
    return str.split(wordToFind).join(wordToReplace);
}
console.log(findAndReplace(str,'d','e'));

// 7.这段代码可以将RGB模式下的颜色转换为十六进制。
const RGBToHex=(r,g,b)=>((r<<16)+(g<<8)+b).toString(16).padStart(6,'0');
console.log(RGBToHex(255,255,255));

// 8.洗牌
const shuffle=([...arr])=>{
    let m=arr.length;
    while(m){
        let i=Math.floor(Math.random()*m--);
        [arr[i],arr[m]]=[arr[m],arr[i]];
    }
    return arr;
}
console.log(shuffle(arr));

// 9.这段代码可以帮你移除数组中的false值，包括false，undefined， NaN和empty。
const removeFalseValues=arr=>[...arr].filter(item=>item);
console.log(removeFalseValues(arr3));

// 10.这段代码可以帮助你移除数组中的重复项。
const removeDuplicateValues=arr=>[...new Set(arr)];
console.log(removeDuplicateValues(arr2));

// 11.这段代码可以将字符串中所有单词的首字母大写。
const capitalizeAllWords=str=>str.replace(/\b[a-z]/g,char=>char.toUpperCase());
console.log(capitalizeAllWords('I am a Pangzi'));

// 12.这段代码可以从日期对象返回字符串时间。
const getTimeFromDate=date=>date.toTimeString().slice(0,8);
console.log(getTimeFromDate(new Date()));

// 13.这段代码可以返回两个日期之间的天数差。
const getTimeDiff=(date1,date2)=>(date2.getTime()-date1.getTime())/(24*60*60*1000);
console.log(getTimeDiff(new Date('2020-12-25'),new Date('2020-09-06')));

// 14.这段代码可以将角度从弧度转换为度。
const radianToDegree=radian=>(radian * 180)/Math.PI;
console.log(radianToDegree(1.57));

// 15.这段代码可以检查给定的字符串是否为有效的JSON。
const isValidJSON=str=>{
    try{JSON.parse(str)
        return true;
    }catch{
        return false;
    }
}
console.log(isValidJSON(`{"title":"javascript","price":14}`));
console.log(isValidJSON(`{"title":"javascript","price":14,"subtitle"}`));

// 16.这段代码常被用于，将给定的字符串转换为一个单词数组。
const toWords=(str,pattern=(/[^a-zA-Z-]+/))=>str.split(pattern).filter(item=>item);
var tar='I want to become a good programmer';
console.log(toWords(tar));

// 17.如果你正处于一个很长的页面的底部，而你想要快速滚动到页面顶部，这个时候，这段代码就可以使你的滚动操作更加流畅。
const scrollToTop=()=>{
    const t=document.documentElement.scrollTop || document.body.scrollTop;
    if(t>0){
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0,t-t/8);
    }
}

// 18.这段代码经常被用于对一个数字进行有效性验证。
const isValidNumber=num=>!isNaN(num) && isFinite(num) && Number(num)===num;
console.log(isValidNumber('a'));
console.log(isValidNumber(5));