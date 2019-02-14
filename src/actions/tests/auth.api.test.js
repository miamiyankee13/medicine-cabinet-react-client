import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login } from "../auth"

//DOC https://michalzalecki.com/testing-redux-thunk-like-you-always-want-it/

export const mockStore = configureMockStore([thunk]);

describe("changePurchaseStatus", () => {
  it("fails to login with phoney credentials", async () => {
    const store = mockStore();
    //   await seedData(``) POST /seed/wellguardedsecret
    try {      
      await store.dispatch(login("", ""));
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: "AUTH_REQUEST" });
      expect(actions[1]).toEqual({ type: "SET_AUTH_TOKEN", meta: { id: "rylauNS2GG", status: "sent" } });
      expect(actions[2]).toEqual({ type: "AUTH_SUCCESS" });
    } catch (e) {
      expect(e.message).toEqual('Submit Validation Failed')
    }
  });
});

describe("changePurchaseStatus", () => {
  it("logins in with the right credentials", async () => {
    const store = mockStore();
    //   await seedData(``) /seed/wellguardedsecret
    
      await store.dispatch(login("tudor", "1234567890"));
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: "AUTH_REQUEST" });
      expect(actions[1]).toEqual({ type: "SET_AUTH_TOKEN", meta: { id: "rylauNS2GG", status: "sent" } });
      expect(actions[2]).toEqual({ type: "AUTH_SUCCESS" });
      
  });
});
