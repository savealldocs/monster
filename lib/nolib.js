const decode = (octal, conversionType) => {
  // To represent the input as a 8-bytes array
  var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];
  if (conversionType === "hex") var long = parseInt(octal, 16);
  else var long = parseInt(octal, 8);
  for (var index = 0; index < byteArray.length; index++) {
    var byte = long & 0xff;
    byteArray[index] = byte;
    long = (long - byte) / 256;
  }

  return byteArray;
};

const encode = (byteArray, conversionType) => {
  var value = 0;
  for (var i = byteArray.length - 1; i >= 0; i--) {
    value = value * 256 + byteArray[i];
  }
  if (conversionType === "hex") return value.toString(16);
  else return value.toString(8);
};

module.export = { decode, encode };
