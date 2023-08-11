import { emailExists } from "./emailExists.middlewarers";
import { handleErrors } from "./handleError.middlewarers";
import { nameExists } from "./nameExists.middlewarers";
import { idExists } from "./idExists.middlewarers";
import { infoExists } from "./infoExists.middlewares";

export default { emailExists, handleErrors, idExists, nameExists, infoExists }

