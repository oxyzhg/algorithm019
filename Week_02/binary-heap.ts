/**
 * 二根堆
 * 特点：堆顶最大或最小
 */

class BinaryHeap {
  data: number[];
  compareFn: Function;

  constructor(compareFn) {
    this.data = [];
    this.compareFn = compareFn;
  }

  insert(value: number) {
    this.insertAt(this.data.length, value);
  }

  insertAt(index: number, value: number) {
    this.data[index] = value;

    // 父节点：index
    // 子节点：index*2+1, index*2+2
    while (index > 0 && this.compareFn(value, this.data[Math.floor((index - 1) / 2)]) > 0) {
      // 如果插入值是更大的值，则父子交换值
      const parentIndex = Math.floor((index - 1) / 2);
      this.data[index] = this.data[parentIndex];
      this.data[parentIndex] = value;
      index = parentIndex;
    }
  }

  delete(index: number) {
    if (index === 0) return;

    const len = this.data.length;
    const value = this.data[index];
    let i = index;

    while (i < len) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;

      // 没有左子节点
      if (left >= len) break;
      // 没有右子节点,但是有左子节点
      if (right >= len) {
        this.data[i] = this.data[left];
        i = left;
        break;
      }
      // 左右子节点都有,更小的补到父节点
      if (this.compareFn(this.data[left], this.data[right]) > 0) {
        this.data[i] = left;
        i = left;
      } else {
        this.data[i] = right;
        i = right;
      }

      // 检查最后的空位是否为堆尾
      if (i < len - 1) {
        this.insertAt(i, this.data.pop());
      } else {
        this.data.pop();
      }
    }

    return value;
  }
}

function compareFn(a: number, b: number): number {
  return a - b;
}
