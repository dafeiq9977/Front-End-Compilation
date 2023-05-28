// 定义一个枚举
enum Direction {Up, Down, Left, Right};

function changeDirection(direction: Direction) {

}

// 使用枚举类型的成员
changeDirection(Direction.Down);


// 枚举类型成员的值
enum Direction2 {
  Up = 10,
  Down,   // Down是11
  Left,   // Left是12
  Right,  // Right是13
};


// 枚举成员的值是字符串类型 只要有一个成员的值设定为字符串，所有成员都要添加
enum Direction3 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}