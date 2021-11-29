const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GlobalConfigSchema = new Schema(
  {
    customId: {
      type: String,
      required: true
    },
    development: {
      database: {
        uri: {
          type: String
        }
      },
      email: {
        mailUser: {
          type: String
        },
        mailPassword: {
          type: String
        },
        mailService: {
          type: String
        }
      },
      auth: {
        secretOrKey: {
          type: String
        }
      },
      infinitScrollEnabled: {
        type: Boolean
      },
      paginationEnabled: {
        type: Boolean
      },
      showProductsPerPage: {
        mobile: {
          type: Number
        },
        tablet: {
          type: Number
        },
        desktop: {
          type: Number
        }
      },
      minOrderValue: {
        type: Number
      }
    },
    production: {
      database: {
        uri: {
          type: String
        }
      },
      email: {
        mailUser: {
          type: String
        },
        mailPassword: {
          type: String
        },
        mailService: {
          type: String
        }
      },
      auth: {
        secretOrKey: {
          type: String
        }
      },
      infinitScrollEnabled: {
        type: Boolean
      },
      paginationEnabled: {
        type: Boolean
      },
      showProductsPerPage: {
        mobile: {
          type: Number
        },
        tablet: {
          type: Number
        },
        desktop: {
          type: Number
        }
      },
      minOrderValue: {
        type: Number
      }
    }
  },
  { strict: false }
);

module.exports = GlobalConfig = mongoose.model(
  "global-configs",
  GlobalConfigSchema,
  "global-configs"
);
