/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length;
    let mid;
    
    while (left <= right) {
      mid = Math.trunc((left + right) / 2);
      
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid] > arr[mid + 1]) {
        right = mid;
      } else {
        left = mid;
      }
    }
    
    return mid;
  };