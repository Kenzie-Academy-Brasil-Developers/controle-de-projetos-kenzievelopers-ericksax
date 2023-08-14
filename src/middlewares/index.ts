import { emailExists } from "./emailExists.middlewarers";
import { handleErrors } from "./handleError.middlewarers";
import { nameExists } from "./nameExists.middlewarers";
import { idExists } from "./idExists.middlewarers";
import { infoExists } from "./infoExists.middlewares";
import { invalidOS } from "./invalidOSoption.middleweare";
import { projectExists } from "./projectIdExists.midlewares";
import { developerIdExists } from "./developerIdExists.middleware";
export default {
  emailExists,
  handleErrors,
  idExists,
  nameExists,
  infoExists,
  invalidOS,
  projectExists,
  developerIdExists
};
