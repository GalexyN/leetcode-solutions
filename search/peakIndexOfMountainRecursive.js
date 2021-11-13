/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr, left = 0, right = arr.length) {
    if (!arr.length) {
      return;
    }
    
    let mid = Math.trunc((left + right) / 2) || 0;
    
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    }
    
    if (arr[mid] < arr[mid - 1]) {
      return peakIndexInMountainArray(arr, left, mid)
    }
    
    if (arr[mid] > arr[mid - 1])
      return peakIndexInMountainArray(arr, mid, right)
  };