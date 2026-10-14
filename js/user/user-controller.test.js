const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Eduardo", "eduardo@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //add usuario  no existente
test("add user not previously in the list", () => {
  const user = new User(5678, "Diego", "diego@generation.org");

  userController.add(user);

  expect(userController.getUsers()).toContain(user);
});

//remove usuario no existente
test("remove user not present in the list", () => {
  const user = new User(9999, "Juan", "juan@generation.org");

  const usersBefore = [...userController.getUsers()];

  userController.remove(user);

  expect(userController.getUsers()).toEqual(usersBefore);
});

//Pruebas  findByEmail
test("findByEmail() returns the user with a matching email", () => {
  const user = new User(2001, "Zully", "zully@generation.org");

  userController.add(user);

  expect(userController.findByEmail("zully@generation.org")).toEqual(user);
});

test("findByEmail() returns undefined when email does not exist", () => {
  expect(
    userController.findByEmail("inexistente@generation.org"),
  ).toBeUndefined();
});

//Pruebas  findById()
test("findById() returns the user with a matching id", () => {
  const user = new User(3001, "Carlos", "carlos@generation.org");

  userController.add(user);

  expect(userController.findById(3001)).toEqual(user);
});

test("findById() returns undefined when id does not exist", () => {
  expect(userController.findById(99999)).toBeUndefined();
});
