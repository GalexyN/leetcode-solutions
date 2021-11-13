// 5%
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
 var findDuplicate = function(paths) {
    let storage = [];
    for (let el of paths) {
      let elSplit = el.split(' ');
      let dir = elSplit[0];
      for (let i = 1; i < elSplit.length; i ++) {
        let fileName = elSplit[i].substring(0, elSplit[i].indexOf('('));
        let fileText = elSplit[i].substring(elSplit[i].indexOf('(') + 1, elSplit[i].indexOf(')'));
        storage.push([`${dir}/${fileName}`, fileText]);
      }
    }
    
    let ans = [];
    let text = {};
    storage.forEach(el => {
      if (!text[el[1]]) 
      text[el[1]] = '';
    });
    
    for (let el in text) {
      let dupes = [];
      for (let i = 0; i < storage.length; i ++) {
        if (storage[i][1] === el) {
          dupes.push(storage[i][0])
        }
      }
      if (dupes.length > 1) { 
        ans.push(dupes);
      }
    }
    
    return ans;
  };

  // 41%
  /**
 * @param {string[]} paths
 * @return {string[][]}
 
 paths = [
 "root/a 1.txt(abcd) 2.txt(efgh)",
 "root/c 3.txt(abcd)",
 "root/c/d 4.txt(efgh)","
 root 4.txt(efgh)"
 ]
 */
var findDuplicate = function(paths) {
    let map = new Map();
    let res = [];
    
    for (let i = 0; i < paths.length; i ++) {
      let dir = paths[i].split(' ');
      for (let j = 1; j < dir.length; j ++) {
        let tmp = dir[j].split('(');
        let file = dir[0] + '/' + tmp[0];
        if (map.has(tmp[1])) {
          map.set(tmp[1], [...map.get(tmp[1]), file])
        } else {
          map.set(tmp[1], [file])
        }
      }
    }
    
    for (let el of map.values()) {
      if (el.length > 1) {
        res.push(el);
      }
    }
    
    return res;
  };