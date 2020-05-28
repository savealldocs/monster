import { encode, decode } from "./lib/nolib";

const str = "31646541";

const str2 = [103, 77, 97];
const numberByteArray = decode(str, "octa");
console.log(numberByteArray);
const octalNumber = encode(numberByteArray, "octa");
console.log(octalNumber);
