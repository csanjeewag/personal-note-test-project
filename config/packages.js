/**
 *  config/packages.js
 *
 * @description :: all packages details define here
 *
 */

/** define PACKAGES */
var PACKAGES = {};

/** Package 01 : Office Package */
PACKAGES.PACKAGE_01 =
    {
        packageId   : 'PACKAGE_01',
        name        : 'Basic Plan',
        description : 'Basic Plan',
        packageType : 'PAID',
        amount      : 69,
        yearAmount  : 690,

        storageSize : 2147483648,  // 2GB
        packageLimitValue : '2GB',

        noOfDataSet     : 'UNLIMITED',
        noOfDataBox     : '10',  // ( include Default Box )
        noOfCanvas      : '3',
        noOfDashBoard   : '5',
        noOfTileInOneDashBoard  : '6',

        objSharedUserCount : 'UNLIMITED',

        uploadDataSet   : true,
        updateDataSet   : true,
        shareDataSet    : true,
        moveDataSet     : true
    };

/** Package 02 : View Only Dashboard Package */
PACKAGES.PACKAGE_02 =
    {
        packageId   : 'PACKAGE_02',
        name        : 'Dashboard View',
        description : 'Dashboard View',
        packageType : 'PAID',
        amount      : 10,
        yearAmount  : 100,

        storageSize : 2147483648,  // 2GB
        packageLimitValue : '2GB',

        noOfDataSet     : 'UNLIMITED',
        noOfDataBox     : '10',  // ( include Default Box )
        noOfCanvas      : '3',
        noOfDashBoard   : '5',
        noOfTileInOneDashBoard  : '6',

        objSharedUserCount : 'UNLIMITED',

        uploadDataSet   : true,
        updateDataSet   : true,
        shareDataSet    : true,
        moveDataSet     : true
    };

// export PACKAGES
module.exports = PACKAGES;