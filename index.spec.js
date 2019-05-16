const server = require("./server");
const request = require("supertest");

describe("server", () => {
  describe("get /", () => {
    it("should return status 200", () => {
      return request(server)
        .get("/api/cars")
        .expect(200);
    });
  });

  describe("post /", () => {
    it("create new post should send status 200", async () => {
      const car = {
        make: "newCar",
        model: "newModel",
        year: 2012
      };
      const res = await request(server)
        .post("/api/cars")
        .send(car);
      expect(res.status).toBe(200);
    });

    it("create new invalid post should send status 500", async () => {
      const invalidCar = {
        invalid: "newCar"
      };
      const res = await request(server)
        .post("/api/cars")
        .send(invalidCar);
      expect(res.status).toBe(500);
    });
  });

  describe("delete /", () => {});
});
