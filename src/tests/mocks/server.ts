import { setupServer } from "msw/node";
import { dogHandler, dogsHandler } from "./handlers";

export const server = setupServer(...dogHandler, ...dogsHandler);
