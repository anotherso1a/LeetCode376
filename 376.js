/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length<2){
        return nums.length
    }
    var flag=true,flag1=true,l=nums.length-1,res=1,res1=1
    for(var i=0;i<l;i++){
        if(nums[i]===nums[i+1]||typeof(nums[i])!=='number'||typeof(nums[i+1])!=='number'){
            continue
        }
        if((nums[i]>nums[i+1])^flag){
            flag=!flag
            res++
        }else if((nums[i]<nums[i+1])^flag1){
            flag1=!flag1
            res1++
        }
    }
    return Math.max(res,res1)
};