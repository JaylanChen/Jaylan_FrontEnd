/**
 * 两数之和
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i != j && nums[i] + nums[j] == target) {
                return new Array(i, j);
            }
        }
    }
};


/**
 * 反转整数
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 注意：假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var int_max = 2147483647; // Math.pow(2, 31)  - 1
    var int_min = -2147483648; // -Math.pow(2, 31)
    var result = 0;
    while (x != 0) {
        result = result * 10 + (x % 10);
        x = result > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    }
    if (result < int_min || result > int_max) {
        result = 0;
    }
    return result;
};


/**
 * 回文数
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    var result = 0;
    var temp = x;
    while (temp != 0) {
        result = result * 10 + (temp % 10);
        temp = x > 0 ? Math.floor(temp / 10) : Math.ceil(temp / 10);
    }
    return result === x;
};
/**
 * 你能不将整数转为字符串来解决这个问题吗？
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function (x) {
    if (x < 0) {
        return false;
    }
    var str = x.toString();
    if (str.length === 1) {
        return true;
    }
    var i = 0;
    var j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
            break;
        }
        i++;
        j--;
    }
    return true;
};


/**
 * 反转字符串
 * 请编写一个函数，其功能是将输入的字符串反转过来。
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    if (s.length === 1) {
        return s;
    }
    var result = '';
    for (var i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
};


/**
 * 宝石与石头
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 
 * S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    var result = 0;
    for (var i = 0; i < J.length; i++) {
        for (var j = 0; j < S.length; j++) {
            if (J[i] === S[j]) {
                result++;
            }
        }
    }
    return result;
};

/**
 * 罗马数字转整数
 * 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。
 * 符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。
 * 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。
 * 这个特殊的规则只适用于以下六种情况：
 *     I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 *     X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 *     C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var romanDic = new Array();
    romanDic['I'] = 1;
    romanDic['V'] = 5;
    romanDic['X'] = 10;
    romanDic['C'] = 100;
    romanDic['M'] = 1000;
    romanDic['L'] = 50;
    romanDic['D'] = 500;

    var result = 0;
    var currentVal = 0;
    for (var i = 0; i < s.length; i++) {
        currentVal = romanDic[s[i]];
        if (i + 1 > s.length || currentVal >= romanDic[s[i + 1]]) {
            result += currentVal;
        } else {
            result -= currentVal;
        }
    }
    return result;
};


/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    var j = 0;
    var flag = true;
    var minLength = strs[0].length;
    //for (var n = 1; n < strs.length; n++) {
    //    var currentLength = strs[n].length;
    //    if (minLength > currentLength) {
    //        minLength = currentLength;
    //    }
    //}
    var str0 = strs[0];
    while (j < minLength) {
        var item = str0[j];
        for (var i = 1; i < strs.length; i++) {
            if (strs[i][j] !== item) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            break;
        }
        j++;
    }
    var prefix = str0.substring(0, j);
    return prefix;
};


/**
 * 计数质数
 * 统计所有 小于 非负整数 n 的质数的数量。
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
    if (n <= 2) {
        return 0;
    } else {
        let primeCount = 1;
        for (let i = 3; i < n; i += 2) {
            if (isPrime(i)) {
                primeCount++;
            }
        }
        return primeCount;
    }
};

let isPrime = function (num) {
    if (num % 2 == 0) {
        //排除偶数, 例外2是质数
        return num === 2;
    }
    //依次判断是否能被奇数整除，最大循环为数值的开方
    var squareRoot = Math.sqrt(num);
    //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
    for (let i = 3; i <= squareRoot; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    var node1 = l1;
    var node2 = l2;
    var listNode = new ListNode(0);
    var curr = listNode;
    while (node1 != null && node2 != null) {
        if (node1.val < node2.val) {
            curr.next = new ListNode(node1.val);
            curr = curr.next;
            node1 = node1.next;
        }else if(node1.val == node2.val){
            curr.next = new ListNode(node1.val);
            curr = curr.next;
            node1 = node1.next;
            curr.next = new ListNode(node2.val);
            curr = curr.next;
            node2 = node2.next;
        } else {
            curr.next = new ListNode(node2.val);
            curr = curr.next;
            node2 = node2.next;
        }
    }
    if (node1 != null) {
        curr.next = node1;
    }
    if (node2 != null) {
        curr.next = node2;
    }
    return listNode.next;
};


/**
 * 删除排序数组中的重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * ps: 已排序数组 并且 不需要考虑数组中超出新长度后面的元素。
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    if (!nums.length) {
        return 0;
    }
    let res = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[res]) {
            nums[res + 1] = nums[i];
            res++;
        }
    }
    return res + 1;
};


/**
 * 删除排序数组中的重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * ps: 已排序数组 并且 不需要考虑数组中超出新长度后面的元素。
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (!nums.length) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};


/**
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
// let strStr = function(haystack, needle) {
//     if (needle === '') return 0;
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         for (let j = 0; j < needle.length; j++) {
//             if (needle[j] !== haystack[i + j]) {
//                 break;
//             }
//             if (j === needle.length - 1) {
//                 return i;
//             }
//         }
//     }
//     return -1;
// };


/**
 * 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 *  左括号必须用相同类型的右括号闭合。
 *  左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 栈:先进后出（FILO）
    var rightSymbols = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            rightSymbols.push(")");
        } else if (s[i] == "{") {
            rightSymbols.push("}");
        } else if (s[i] == "[") {
            rightSymbols.push("]");
        } else if (rightSymbols.pop() != s[i]) {
            return false;
        }
    }
    return !rightSymbols.length;
};
