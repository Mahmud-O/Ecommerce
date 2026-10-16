diff --git a/package-lock.json b/package-lock.json
index b714332..7391f99 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -2,40 +2,47 @@
   "name": "ecommerce",
   "version": "0.0.0",
   "lockfileVersion": 3,
   "requires": true,
   "packages": {
     "": {
       "name": "ecommerce",
       "version": "0.0.0",
       "dependencies": {
         "@popperjs/core": "^2.11.8",
+        "@radix-ui/react-accordion": "^1.3.1",
+        "@radix-ui/react-avatar": "^1.3.1",
         "@radix-ui/react-dialog": "^1.1.14",
+        "@radix-ui/react-dropdown-menu": "^2.2.1",
+        "@radix-ui/react-separator": "^1.2.0",
         "@radix-ui/react-slot": "^1.2.3",
+        "@radix-ui/react-tabs": "^1.2.1",
         "@reduxjs/toolkit": "^2.8.2",
         "@tailwindcss/vite": "^4.1.11",
         "@tanstack/react-query": "^5.84.1",
         "axios": "^1.10.0",
         "class-variance-authority": "^0.7.1",
         "clsx": "^2.1.1",
         "flowbite": "^3.1.2",
         "formik": "^2.4.6",
+        "framer-motion": "^14.3.0",
         "lucide-react": "^0.536.0",
         "react": "^18.3.1",
         "react-dom": "^18.3.1",
         "react-helmet": "^6.1.0",
         "react-hot-toast": "^2.5.2",
         "react-redux": "^9.2.0",
         "react-router-dom": "^7.6.3",
         "react-slick": "^0.30.3",
         "react-spinners": "^0.17.0",
         "slick-carousel": "^1.8.1",
+        "sonner": "^2.0.8",
         "tailwind-merge": "^3.3.1",
         "tailwindcss-animate": "^1.0.7",
         "yup": "^1.6.1"
       },
       "devDependencies": {
         "@eslint/js": "^9.29.0",
         "@types/react": "^19.1.8",
         "@types/react-dom": "^19.1.6",
         "@vitejs/plugin-react": "^4.5.2",
         "autoprefixer": "^10.4.21",
@@ -917,20 +924,58 @@
       "integrity": "sha512-bkOp+iumZCCbt1K1CmWf0R9pM5yKpDv+ZXtvSyQpudrI9kuFLp+bM2WOPXImuD/ceQuaa8f5pj93Y7zyECIGNA==",
       "dev": true,
       "license": "Apache-2.0",
       "dependencies": {
         "@types/json-schema": "^7.0.15"
       },
       "engines": {
         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
       }
     },
+    "node_modules/@floating-ui/core": {
+      "version": "1.8.0",
+      "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.8.0.tgz",
+      "integrity": "sha512-0CIZ5itps/8x7BG8dEIhs53BvCUH2PCoogtakwRTut+Arm58sJooJ0AuZhLw2HJYIR5cMLNPBSS728sPho2khQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@floating-ui/utils": "^0.2.12"
+      }
+    },
+    "node_modules/@floating-ui/dom": {
+      "version": "1.8.0",
+      "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.8.0.tgz",
+      "integrity": "sha512-yXSrzeHZBTZadLOlfyhCkJHNeLJnHRnRInwdZ40L7ZiaAtrBwoYlsDrX3v5zB1Utk7CLfzcOVnVVWoXEky7Ceg==",
+      "license": "MIT",
+      "dependencies": {
+        "@floating-ui/core": "^1.8.0",
+        "@floating-ui/utils": "^0.2.12"
+      }
+    },
+    "node_modules/@floating-ui/react-dom": {
+      "version": "2.1.9",
+      "resolved": "https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.9.tgz",
+      "integrity": "sha512-JDjEFGCpImxDCA7JJKviA0M9+RtmJdj0m/NVU5IMgBK+AmZouAQQ7/+2GLH0GXXY0YMw9oXPB8hKdbPYg5QLYg==",
+      "license": "MIT",
+      "dependencies": {
+        "@floating-ui/dom": "^1.8.0"
+      },
+      "peerDependencies": {
+        "react": ">=16.8.0",
+        "react-dom": ">=16.8.0"
+      }
+    },
+    "node_modules/@floating-ui/utils": {
+      "version": "0.2.12",
+      "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.12.tgz",
+      "integrity": "sha512-HpCo8tmWzLVad5s2d19EhAz5zqrrQ6s69qd6moPMQvkOuSwDT1YgRfWSVuc4ennqrgv3OHppiOGMQ7oC13yIww==",
+      "license": "MIT"
+    },
     "node_modules/@humanfs/core": {
       "version": "0.19.1",
       "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
       "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
       "dev": true,
       "license": "Apache-2.0",
       "engines": {
         "node": ">=18.18.0"
       }
     },
@@ -1430,250 +1475,2067 @@
         "type": "opencollective",
         "url": "https://opencollective.com/popperjs"
       }
     },
     "node_modules/@radix-ui/primitive": {
       "version": "1.1.2",
       "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.2.tgz",
       "integrity": "sha512-XnbHrrprsNqZKQhStrSwgRUQzoCI1glLzdw79xiZPoofhGICeZRSQ3dIxAKH1gb3OHfNf4d6f+vAv3kil2eggA==",
       "license": "MIT"
     },
-    "node_modules/@radix-ui/react-compose-refs": {
-      "version": "1.1.2",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.2.tgz",
-      "integrity": "sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==",
+    "node_modules/@radix-ui/react-accordion": {
+      "version": "1.3.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-accordion/-/react-accordion-1.3.1.tgz",
+      "integrity": "sha512-lCZ6sbGS/7WO0j84yx4srIgOf0MRJ/sZ13RonADXxvKBym8xrxNCq5f6DibGcr38sIlwPk8/52uYdXeOPsbEDw==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-collapsible": "1.2.1",
+        "@radix-ui/react-collection": "1.2.0",
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-direction": "1.2.0",
+        "@radix-ui/react-id": "1.1.4",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-controllable-state": "1.3.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/primitive": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.2.0.tgz",
+      "integrity": "sha512-KABY+VMIRPJL+Vyzv/335FEhXXD/xDv8BMb1kl48/aXJZMH0LtHCTx5ga5RnxaEP3nZHtmTLf1P9vanmFX46bw==",
+      "license": "MIT"
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-id": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.4.tgz",
+      "integrity": "sha512-TMQp2llA+RYn7JcjnrMnz7wN4pcVttPZnRZo52PLQsoLVKzNlVwUeHmfePgTgRluXFvlD3GD5g5MOVVTJCO0qA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-use-controllable-state": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.3.0.tgz",
+      "integrity": "sha512-TAcBI7bw2ljYCbv4+zuTSd6zICu8pRt6SDN2vJ/Z06K2MXh6I9WYFe/A9ovlFDtR5HVHGm5iDxDoABm/++dbKg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-use-effect-event": "0.0.5",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-use-effect-event": {
+      "version": "0.0.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.5.tgz",
+      "integrity": "sha512-7cshFL8HGS/7HEiHH+9kL9HBwp2sa9yX18Knwek6KYWmXwM7pegMgta2AXMQKI+rq3JnfSj9x8wYqFMTdG1Jgg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-arrow": {
+      "version": "1.1.17",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.17.tgz",
+      "integrity": "sha512-67jjcVvxjXCCStnTW3Z+M7jmaFMuMR7M2JgpDzH4w7JSRrikmzhjfYgP/09ECb8n7whnsgh1ifJ+Ie96qEj+pQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-primitive": "2.2.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-avatar": {
+      "version": "1.3.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-avatar/-/react-avatar-1.3.1.tgz",
+      "integrity": "sha512-ssZOkfQNkFpYVmCPQlr978xSaU7moSrGXdwg4j2Xs2WlGl/1KsSZtfpK+WnLnx0Rwll1BAh6oUrAy/uR31SBvQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-callback-ref": "1.1.5",
+        "@radix-ui/react-use-is-hydrated": "0.1.3",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/primitive": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.2.0.tgz",
+      "integrity": "sha512-KABY+VMIRPJL+Vyzv/335FEhXXD/xDv8BMb1kl48/aXJZMH0LtHCTx5ga5RnxaEP3nZHtmTLf1P9vanmFX46bw==",
+      "license": "MIT"
+    },
+    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-use-callback-ref": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.5.tgz",
+      "integrity": "sha512-Y5GBf4NKeADoXI1geiMlMuMoURT3k9MizzzKhGb/m55H94aGigZ01PIpkvsO6lML13BA6XYAXSJ6gza7vTn5nw==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-collapsible/-/react-collapsible-1.2.1.tgz",
+      "integrity": "sha512-fSzLb/qy1wuZSxQBcxpW0hNXYHDMWiIXDGyJGdA4+FSLknOWZsNRrTCUavxb4PI8b8lvHo/CysO6NVi5zLpo5g==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-id": "1.1.4",
+        "@radix-ui/react-presence": "1.1.11",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-controllable-state": "1.3.0",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/primitive": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.2.0.tgz",
+      "integrity": "sha512-KABY+VMIRPJL+Vyzv/335FEhXXD/xDv8BMb1kl48/aXJZMH0LtHCTx5ga5RnxaEP3nZHtmTLf1P9vanmFX46bw==",
+      "license": "MIT"
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-id": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.4.tgz",
+      "integrity": "sha512-TMQp2llA+RYn7JcjnrMnz7wN4pcVttPZnRZo52PLQsoLVKzNlVwUeHmfePgTgRluXFvlD3GD5g5MOVVTJCO0qA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-presence": {
+      "version": "1.1.11",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.11.tgz",
+      "integrity": "sha512-Z7/atlkab36Z8hm+V8zYc79r0W+tiOB1o0tun1By94JyadkekLQmtEAnBSP9XKXBNQsStoStS4+gX10JpS5akA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-use-controllable-state": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.3.0.tgz",
+      "integrity": "sha512-TAcBI7bw2ljYCbv4+zuTSd6zICu8pRt6SDN2vJ/Z06K2MXh6I9WYFe/A9ovlFDtR5HVHGm5iDxDoABm/++dbKg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-use-effect-event": "0.0.5",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-use-effect-event": {
+      "version": "0.0.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.5.tgz",
+      "integrity": "sha512-7cshFL8HGS/7HEiHH+9kL9HBwp2sa9yX18Knwek6KYWmXwM7pegMgta2AXMQKI+rq3JnfSj9x8wYqFMTdG1Jgg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collection": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-collection/-/react-collection-1.2.0.tgz",
+      "integrity": "sha512-+yiQzqcc7Sy7/5s0jrMCjpPRFB3538VNrXPWdTLZhE/SCfgEws4aI6lHWN/vvcnyhHndROWBzqmqB4QBrITZ9Q==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-slot": "1.5.0",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.2.tgz",
+      "integrity": "sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-context": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.2.tgz",
+      "integrity": "sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dialog": {
+      "version": "1.1.14",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-dialog/-/react-dialog-1.1.14.tgz",
+      "integrity": "sha512-+CpweKjqpzTmwRwcYECQcNYbI8V9VSQt0SNFKeEBLgfucbsLssU6Ppq7wUdNXEGb573bMjFhVjKVll8rmV6zMw==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.1.2",
+        "@radix-ui/react-compose-refs": "1.1.2",
+        "@radix-ui/react-context": "1.1.2",
+        "@radix-ui/react-dismissable-layer": "1.1.10",
+        "@radix-ui/react-focus-guards": "1.1.2",
+        "@radix-ui/react-focus-scope": "1.1.7",
+        "@radix-ui/react-id": "1.1.1",
+        "@radix-ui/react-portal": "1.1.9",
+        "@radix-ui/react-presence": "1.1.4",
+        "@radix-ui/react-primitive": "2.1.3",
+        "@radix-ui/react-slot": "1.2.3",
+        "@radix-ui/react-use-controllable-state": "1.2.2",
+        "aria-hidden": "^1.2.4",
+        "react-remove-scroll": "^2.6.3"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-direction": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-direction/-/react-direction-1.2.0.tgz",
+      "integrity": "sha512-FtRA52a/r+LKStFT+neLUm+8vSe7wbzkbQGGeU8ixFiwC8NU14Evoq9ATECqL3eGbcUzJR4fyfA4KkK/q6dfqg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dismissable-layer": {
+      "version": "1.1.10",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.10.tgz",
+      "integrity": "sha512-IM1zzRV4W3HtVgftdQiiOmA0AdJlCtMLe00FXaHwgt3rAnNsIyDqshvkIW3hj/iu5hu8ERP7KIYki6NkqDxAwQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.1.2",
+        "@radix-ui/react-compose-refs": "1.1.2",
+        "@radix-ui/react-primitive": "2.1.3",
+        "@radix-ui/react-use-callback-ref": "1.1.1",
+        "@radix-ui/react-use-escape-keydown": "1.1.1"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu": {
+      "version": "2.2.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-dropdown-menu/-/react-dropdown-menu-2.2.1.tgz",
+      "integrity": "sha512-XsHcmYG2AcqnvTqrOXXWcMrhquEIlqucizuDH1MV/qMRW+DndpBCMvNeTRXOxqmG1H5j89M/+I0/34Zdd+zDcQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-id": "1.1.4",
+        "@radix-ui/react-menu": "2.2.1",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-controllable-state": "1.3.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/primitive": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.2.0.tgz",
+      "integrity": "sha512-KABY+VMIRPJL+Vyzv/335FEhXXD/xDv8BMb1kl48/aXJZMH0LtHCTx5ga5RnxaEP3nZHtmTLf1P9vanmFX46bw==",
+      "license": "MIT"
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-id": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.4.tgz",
+      "integrity": "sha512-TMQp2llA+RYn7JcjnrMnz7wN4pcVttPZnRZo52PLQsoLVKzNlVwUeHmfePgTgRluXFvlD3GD5g5MOVVTJCO0qA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-use-controllable-state": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.3.0.tgz",
+      "integrity": "sha512-TAcBI7bw2ljYCbv4+zuTSd6zICu8pRt6SDN2vJ/Z06K2MXh6I9WYFe/A9ovlFDtR5HVHGm5iDxDoABm/++dbKg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-use-effect-event": "0.0.5",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-use-effect-event": {
+      "version": "0.0.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.5.tgz",
+      "integrity": "sha512-7cshFL8HGS/7HEiHH+9kL9HBwp2sa9yX18Knwek6KYWmXwM7pegMgta2AXMQKI+rq3JnfSj9x8wYqFMTdG1Jgg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-focus-guards": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.2.tgz",
+      "integrity": "sha512-fyjAACV62oPV925xFCrH8DR5xWhg9KYtJT4s3u54jxp+L/hbpTY2kIeEFFbFe+a/HCE94zGQMZLIpVTPVZDhaA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-focus-scope": {
+      "version": "1.1.7",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.7.tgz",
+      "integrity": "sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.2",
+        "@radix-ui/react-primitive": "2.1.3",
+        "@radix-ui/react-use-callback-ref": "1.1.1"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-id": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.1.tgz",
+      "integrity": "sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.1"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu": {
+      "version": "2.2.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-menu/-/react-menu-2.2.1.tgz",
+      "integrity": "sha512-G34BsU90SBj5foYpz8pQqq/Q0Dlfyyl6KitWEfRwXC0QvfwhWNAwS49DWP2+rRJ0iwv20Z2Qx7Sk+T03bGo5JA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-collection": "1.2.0",
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-direction": "1.2.0",
+        "@radix-ui/react-dismissable-layer": "1.2.1",
+        "@radix-ui/react-focus-guards": "1.2.0",
+        "@radix-ui/react-focus-scope": "1.3.1",
+        "@radix-ui/react-id": "1.1.4",
+        "@radix-ui/react-popper": "1.4.0",
+        "@radix-ui/react-portal": "1.2.0",
+        "@radix-ui/react-presence": "1.1.11",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-roving-focus": "1.2.1",
+        "@radix-ui/react-slot": "1.5.0",
+        "@radix-ui/react-use-callback-ref": "1.1.5",
+        "aria-hidden": "^1.2.4",
+        "react-remove-scroll": "^2.7.2"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/primitive": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.2.0.tgz",
+      "integrity": "sha512-KABY+VMIRPJL+Vyzv/335FEhXXD/xDv8BMb1kl48/aXJZMH0LtHCTx5ga5RnxaEP3nZHtmTLf1P9vanmFX46bw==",
+      "license": "MIT"
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-dismissable-layer": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.2.1.tgz",
+      "integrity": "sha512-KIfDcAsx+oVylFZ4xryVKusJUrLLhTQmfnJW4kwk4Km5myvhHCrj04hnWWUC166+xD4DHdH8tQGylwYX1h6+Pg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-callback-ref": "1.1.5",
+        "@radix-ui/react-use-effect-event": "0.0.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-focus-guards": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.2.0.tgz",
+      "integrity": "sha512-MPm5R0iRGUDrDnPNxmLBkv+X7pN4XKzt+MbWJEuJQsH3NFH4omrbpXpucyYCCKTSt+na/ZxGhEWQrWTZ0285cA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-focus-scope": {
+      "version": "1.3.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.3.1.tgz",
+      "integrity": "sha512-ugeMhbXt4y5S2T1GnIqbWDKEN962PDwnX1fN0eKOOgf5f63Dh2mn8F1FUySlgW0iF6GiVsRF32DzuDIWTUyQJg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-callback-ref": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-id": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.4.tgz",
+      "integrity": "sha512-TMQp2llA+RYn7JcjnrMnz7wN4pcVttPZnRZo52PLQsoLVKzNlVwUeHmfePgTgRluXFvlD3GD5g5MOVVTJCO0qA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-portal": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.2.0.tgz",
+      "integrity": "sha512-StX7xXnaRU41VvFtMm9zlhVGz8XF6GmWWTXftkQaY+tqVkbs/R9UmAp5mLzHHapk5hM9RMZQvO/3usyIP/g42g==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-presence": {
+      "version": "1.1.11",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.11.tgz",
+      "integrity": "sha512-Z7/atlkab36Z8hm+V8zYc79r0W+tiOB1o0tun1By94JyadkekLQmtEAnBSP9XKXBNQsStoStS4+gX10JpS5akA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-use-callback-ref": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.5.tgz",
+      "integrity": "sha512-Y5GBf4NKeADoXI1geiMlMuMoURT3k9MizzzKhGb/m55H94aGigZ01PIpkvsO6lML13BA6XYAXSJ6gza7vTn5nw==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-use-effect-event": {
+      "version": "0.0.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.5.tgz",
+      "integrity": "sha512-7cshFL8HGS/7HEiHH+9kL9HBwp2sa9yX18Knwek6KYWmXwM7pegMgta2AXMQKI+rq3JnfSj9x8wYqFMTdG1Jgg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-popper": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.4.0.tgz",
+      "integrity": "sha512-yCWRvLeGv9Pz3+efwHqGPp70mZ56r3kfIgQVF56Oj2aAa4uP/Tb+IE59wNcc+758rctqbCKx4LbK8II/r7Bn0Q==",
+      "license": "MIT",
+      "dependencies": {
+        "@floating-ui/react-dom": "^2.0.0",
+        "@radix-ui/react-arrow": "1.1.17",
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-callback-ref": "1.1.5",
+        "@radix-ui/react-use-layout-effect": "1.1.4",
+        "@radix-ui/react-use-rect": "1.1.4",
+        "@radix-ui/react-use-size": "1.1.5",
+        "@radix-ui/rect": "1.1.3"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-use-callback-ref": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.5.tgz",
+      "integrity": "sha512-Y5GBf4NKeADoXI1geiMlMuMoURT3k9MizzzKhGb/m55H94aGigZ01PIpkvsO6lML13BA6XYAXSJ6gza7vTn5nw==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-portal": {
+      "version": "1.1.9",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.9.tgz",
+      "integrity": "sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-primitive": "2.1.3",
+        "@radix-ui/react-use-layout-effect": "1.1.1"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-presence": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.4.tgz",
+      "integrity": "sha512-ueDqRbdc4/bkaQT3GIpLQssRlFgWaL/U2z/S31qRwwLWoxHLgry3SIfCwhxeQNbirEUXFa+lq3RL3oBYXtcmIA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.2",
+        "@radix-ui/react-use-layout-effect": "1.1.1"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-primitive": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
+      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.2.3"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-roving-focus/-/react-roving-focus-1.2.1.tgz",
+      "integrity": "sha512-UwraORzVUeEPMclhO1p0vz0qI+TbdDLO9i+FiOqhJyHKwdpCRCck9yVEscUnAMIzCiuNoQa8D4A9bIpOPXGt6Q==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-collection": "1.2.0",
+        "@radix-ui/react-compose-refs": "1.1.5",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-direction": "1.2.0",
+        "@radix-ui/react-id": "1.1.4",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-use-callback-ref": "1.1.5",
+        "@radix-ui/react-use-controllable-state": "1.3.0",
+        "@radix-ui/react-use-is-hydrated": "0.1.3",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/primitive": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.2.0.tgz",
+      "integrity": "sha512-KABY+VMIRPJL+Vyzv/335FEhXXD/xDv8BMb1kl48/aXJZMH0LtHCTx5ga5RnxaEP3nZHtmTLf1P9vanmFX46bw==",
+      "license": "MIT"
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-id": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.4.tgz",
+      "integrity": "sha512-TMQp2llA+RYn7JcjnrMnz7wN4pcVttPZnRZo52PLQsoLVKzNlVwUeHmfePgTgRluXFvlD3GD5g5MOVVTJCO0qA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-slot": "1.5.0"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "@types/react-dom": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
+        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        },
+        "@types/react-dom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-use-callback-ref": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.5.tgz",
+      "integrity": "sha512-Y5GBf4NKeADoXI1geiMlMuMoURT3k9MizzzKhGb/m55H94aGigZ01PIpkvsO6lML13BA6XYAXSJ6gza7vTn5nw==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-use-controllable-state": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.3.0.tgz",
+      "integrity": "sha512-TAcBI7bw2ljYCbv4+zuTSd6zICu8pRt6SDN2vJ/Z06K2MXh6I9WYFe/A9ovlFDtR5HVHGm5iDxDoABm/++dbKg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-use-effect-event": "0.0.5",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-use-effect-event": {
+      "version": "0.0.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.5.tgz",
+      "integrity": "sha512-7cshFL8HGS/7HEiHH+9kL9HBwp2sa9yX18Knwek6KYWmXwM7pegMgta2AXMQKI+rq3JnfSj9x8wYqFMTdG1Jgg==",
       "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
       "peerDependencies": {
         "@types/react": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-context": {
-      "version": "1.1.2",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.2.tgz",
-      "integrity": "sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==",
+    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
       "license": "MIT",
       "peerDependencies": {
         "@types/react": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-dialog": {
-      "version": "1.1.14",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-dialog/-/react-dialog-1.1.14.tgz",
-      "integrity": "sha512-+CpweKjqpzTmwRwcYECQcNYbI8V9VSQt0SNFKeEBLgfucbsLssU6Ppq7wUdNXEGb573bMjFhVjKVll8rmV6zMw==",
+    "node_modules/@radix-ui/react-separator": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-separator/-/react-separator-1.2.0.tgz",
+      "integrity": "sha512-1jUAap0wZEqVP05Ou7kJgRxe/W+Qftng+rUNWGa0qkKbv9r5pWTG3E7a3ELKo2eJoHKMECnzuYrZpSyO1YgcYQ==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/primitive": "1.1.2",
-        "@radix-ui/react-compose-refs": "1.1.2",
-        "@radix-ui/react-context": "1.1.2",
-        "@radix-ui/react-dismissable-layer": "1.1.10",
-        "@radix-ui/react-focus-guards": "1.1.2",
-        "@radix-ui/react-focus-scope": "1.1.7",
-        "@radix-ui/react-id": "1.1.1",
-        "@radix-ui/react-portal": "1.1.9",
-        "@radix-ui/react-presence": "1.1.4",
-        "@radix-ui/react-primitive": "2.1.3",
-        "@radix-ui/react-slot": "1.2.3",
-        "@radix-ui/react-use-controllable-state": "1.2.2",
-        "aria-hidden": "^1.2.4",
-        "react-remove-scroll": "^2.6.3"
+        "@radix-ui/react-primitive": "2.2.0"
       },
       "peerDependencies": {
         "@types/react": "*",
         "@types/react-dom": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         },
         "@types/react-dom": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-dismissable-layer": {
-      "version": "1.1.10",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.10.tgz",
-      "integrity": "sha512-IM1zzRV4W3HtVgftdQiiOmA0AdJlCtMLe00FXaHwgt3rAnNsIyDqshvkIW3hj/iu5hu8ERP7KIYki6NkqDxAwQ==",
+    "node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/primitive": "1.1.2",
-        "@radix-ui/react-compose-refs": "1.1.2",
-        "@radix-ui/react-primitive": "2.1.3",
-        "@radix-ui/react-use-callback-ref": "1.1.1",
-        "@radix-ui/react-use-escape-keydown": "1.1.1"
+        "@radix-ui/react-slot": "1.5.0"
       },
       "peerDependencies": {
         "@types/react": "*",
         "@types/react-dom": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         },
         "@types/react-dom": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-focus-guards": {
-      "version": "1.1.2",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.2.tgz",
-      "integrity": "sha512-fyjAACV62oPV925xFCrH8DR5xWhg9KYtJT4s3u54jxp+L/hbpTY2kIeEFFbFe+a/HCE94zGQMZLIpVTPVZDhaA==",
+    "node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
       "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-compose-refs": "1.1.5"
+      },
       "peerDependencies": {
         "@types/react": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-focus-scope": {
-      "version": "1.1.7",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.7.tgz",
-      "integrity": "sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==",
+    "node_modules/@radix-ui/react-slot": {
+      "version": "1.2.3",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
+      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/react-compose-refs": "1.1.2",
-        "@radix-ui/react-primitive": "2.1.3",
-        "@radix-ui/react-use-callback-ref": "1.1.1"
+        "@radix-ui/react-compose-refs": "1.1.2"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-tabs": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-tabs/-/react-tabs-1.2.1.tgz",
+      "integrity": "sha512-hRoJlode+hg5ZNlR+3tkfkUliIybdTpD5lkAvHQ9yaXseGf7XVO9Ib2GPEIOuaJJbo7YWYbNpDDRfo8Dhf6/xA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-context": "1.3.0",
+        "@radix-ui/react-direction": "1.2.0",
+        "@radix-ui/react-id": "1.1.4",
+        "@radix-ui/react-presence": "1.1.11",
+        "@radix-ui/react-primitive": "2.2.0",
+        "@radix-ui/react-roving-focus": "1.2.1",
+        "@radix-ui/react-use-controllable-state": "1.3.0"
       },
       "peerDependencies": {
         "@types/react": "*",
         "@types/react-dom": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         },
         "@types/react-dom": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-id": {
-      "version": "1.1.1",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.1.tgz",
-      "integrity": "sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==",
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/primitive": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.2.0.tgz",
+      "integrity": "sha512-KABY+VMIRPJL+Vyzv/335FEhXXD/xDv8BMb1kl48/aXJZMH0LtHCTx5ga5RnxaEP3nZHtmTLf1P9vanmFX46bw==",
+      "license": "MIT"
+    },
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-compose-refs": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
+      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-context": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.3.0.tgz",
+      "integrity": "sha512-v5AYEocMISkbJ+1fTXzZpiFv7NRr3D2WiYbLIKf+FkmJ8VkP6d503eV2n34MFussHXY1pcoq3yfJiQH77dc4Mg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-id": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.4.tgz",
+      "integrity": "sha512-TMQp2llA+RYn7JcjnrMnz7wN4pcVttPZnRZo52PLQsoLVKzNlVwUeHmfePgTgRluXFvlD3GD5g5MOVVTJCO0qA==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/react-use-layout-effect": "1.1.1"
+        "@radix-ui/react-use-layout-effect": "1.1.4"
       },
       "peerDependencies": {
         "@types/react": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-portal": {
-      "version": "1.1.9",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.9.tgz",
-      "integrity": "sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==",
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-presence": {
+      "version": "1.1.11",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.11.tgz",
+      "integrity": "sha512-Z7/atlkab36Z8hm+V8zYc79r0W+tiOB1o0tun1By94JyadkekLQmtEAnBSP9XKXBNQsStoStS4+gX10JpS5akA==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/react-primitive": "2.1.3",
-        "@radix-ui/react-use-layout-effect": "1.1.1"
+        "@radix-ui/react-use-layout-effect": "1.1.4"
       },
       "peerDependencies": {
         "@types/react": "*",
         "@types/react-dom": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         },
         "@types/react-dom": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-presence": {
-      "version": "1.1.4",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.4.tgz",
-      "integrity": "sha512-ueDqRbdc4/bkaQT3GIpLQssRlFgWaL/U2z/S31qRwwLWoxHLgry3SIfCwhxeQNbirEUXFa+lq3RL3oBYXtcmIA==",
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-primitive": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.2.0.tgz",
+      "integrity": "sha512-HCTSPMNqv55Qk0IX4geJbpyXazmqulcimwuyjxTkKi29v+QZbG2Zho9BnbBq4YS2PF+KlNb2CXoLz66uUmblkg==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/react-compose-refs": "1.1.2",
-        "@radix-ui/react-use-layout-effect": "1.1.1"
+        "@radix-ui/react-slot": "1.5.0"
       },
       "peerDependencies": {
         "@types/react": "*",
         "@types/react-dom": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         },
         "@types/react-dom": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-primitive": {
-      "version": "2.1.3",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
-      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-slot": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.5.0.tgz",
+      "integrity": "sha512-tyYd9ddPXAysAbdbD9eYxgwpCSv6f3PncqVSNKQFSR5lcJVLz3cb/pANDoYrLiHBpXv7skortyUgGUWsYuPPFQ==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/react-slot": "1.2.3"
+        "@radix-ui/react-compose-refs": "1.1.5"
       },
       "peerDependencies": {
         "@types/react": "*",
-        "@types/react-dom": "*",
-        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
-        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
-        },
-        "@types/react-dom": {
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-use-controllable-state": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.3.0.tgz",
+      "integrity": "sha512-TAcBI7bw2ljYCbv4+zuTSd6zICu8pRt6SDN2vJ/Z06K2MXh6I9WYFe/A9ovlFDtR5HVHGm5iDxDoABm/++dbKg==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/primitive": "1.2.0",
+        "@radix-ui/react-use-effect-event": "0.0.5",
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
           "optional": true
         }
       }
     },
-    "node_modules/@radix-ui/react-slot": {
-      "version": "1.2.3",
-      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
-      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-use-effect-event": {
+      "version": "0.0.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.5.tgz",
+      "integrity": "sha512-7cshFL8HGS/7HEiHH+9kL9HBwp2sa9yX18Knwek6KYWmXwM7pegMgta2AXMQKI+rq3JnfSj9x8wYqFMTdG1Jgg==",
       "license": "MIT",
       "dependencies": {
-        "@radix-ui/react-compose-refs": "1.1.2"
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
       "peerDependencies": {
         "@types/react": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         }
       }
     },
@@ -1740,35 +3602,107 @@
       "peerDependencies": {
         "@types/react": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         }
       }
     },
+    "node_modules/@radix-ui/react-use-is-hydrated": {
+      "version": "0.1.3",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-is-hydrated/-/react-use-is-hydrated-0.1.3.tgz",
+      "integrity": "sha512-umO/aJ+82CpOnhDZUTbILCQf7kU/g0iv+oGs/Q8jw7IkhWBzaEP4sA268PhFAJTFetbwp3ICc6ktpI4TqtxcIw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
     "node_modules/@radix-ui/react-use-layout-effect": {
       "version": "1.1.1",
       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.1.tgz",
       "integrity": "sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==",
       "license": "MIT",
       "peerDependencies": {
         "@types/react": "*",
         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
       },
       "peerDependenciesMeta": {
         "@types/react": {
           "optional": true
         }
       }
     },
+    "node_modules/@radix-ui/react-use-rect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-rect/-/react-use-rect-1.1.4.tgz",
+      "integrity": "sha512-cSOCh6JlkmfjLyNcLiu2nB4v+nm+dkZ+Q5KHWk/soo4U7ZLiEQFKHK9/YmtBHjfCEaU43IBKQOc4/uJmCaiCTQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/rect": "1.1.3"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-use-size": {
+      "version": "1.1.5",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-size/-/react-use-size-1.1.5.tgz",
+      "integrity": "sha512-V1McDQkMGzgivwqdu7u96APs7oi0Jvj9LTzgq3WWrDZqxWdAqU9yZnZQqk5OizGFR8badUQwZsrlao7MOlWYOA==",
+      "license": "MIT",
+      "dependencies": {
+        "@radix-ui/react-use-layout-effect": "1.1.4"
+      },
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/react-use-size/node_modules/@radix-ui/react-use-layout-effect": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
+      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "*",
+        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@radix-ui/rect": {
+      "version": "1.1.3",
+      "resolved": "https://registry.npmjs.org/@radix-ui/rect/-/rect-1.1.3.tgz",
+      "integrity": "sha512-JtyZR+mqgBibTo8xea3B6ZRmzZiM/YeVBtUkas6zMuXjAlfIFIW2FgqeM9eLyvEaYX66vr6DJMK+4U6LV0KhNw==",
+      "license": "MIT"
+    },
     "node_modules/@reduxjs/toolkit": {
       "version": "2.8.2",
       "resolved": "https://registry.npmjs.org/@reduxjs/toolkit/-/toolkit-2.8.2.tgz",
       "integrity": "sha512-MYlOhQ0sLdw4ud48FoC5w0dH9VfWQjtCjreKwYTT3l+r427qYC5Y8PihNutepr8XrNaBUDQo9khWUwQxZaqt5A==",
       "license": "MIT",
       "dependencies": {
         "@standard-schema/spec": "^1.0.0",
         "@standard-schema/utils": "^0.3.0",
         "immer": "^10.0.3",
         "redux": "^5.0.1",
@@ -3705,20 +5639,43 @@
       "dev": true,
       "license": "MIT",
       "engines": {
         "node": "*"
       },
       "funding": {
         "type": "patreon",
         "url": "https://github.com/sponsors/rawify"
       }
     },
+    "node_modules/framer-motion": {
+      "version": "14.3.0",
+      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-14.3.0.tgz",
+      "integrity": "sha512-d8WCrU0ZQn7ukKMykCsDyIOwb/taZeDqqrDBK0du5GO0AO/ynz8fdR/LIIz9Pyy3n3tGwrneR+n0egyrrLa3fw==",
+      "license": "MIT",
+      "dependencies": {
+        "motion-dom": "14.3.0",
+        "motion-utils": "14.1.1",
+        "tslib": "^2.4.0"
+      },
+      "peerDependencies": {
+        "react": "^18.0.0 || ^19.0.0",
+        "react-dom": "^18.0.0 || ^19.0.0"
+      },
+      "peerDependenciesMeta": {
+        "react": {
+          "optional": true
+        },
+        "react-dom": {
+          "optional": true
+        }
+      }
+    },
     "node_modules/fsevents": {
       "version": "2.3.3",
       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
       "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
       "hasInstallScript": true,
       "license": "MIT",
       "optional": true,
       "os": [
         "darwin"
       ],
@@ -4649,20 +6606,35 @@
       "bin": {
         "mkdirp": "dist/cjs/src/bin.js"
       },
       "engines": {
         "node": ">=10"
       },
       "funding": {
         "url": "https://github.com/sponsors/isaacs"
       }
     },
+    "node_modules/motion-dom": {
+      "version": "14.3.0",
+      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-14.3.0.tgz",
+      "integrity": "sha512-rcKO4aEJzAqDEsrH6qFzhLZxs7bNqZpiUEuEATz9LaRwt6dG7hZEbcFUSHNR8NECaKYM0Iuw6Iv6NpWEGXDI+w==",
+      "license": "MIT",
+      "dependencies": {
+        "motion-utils": "14.1.1"
+      }
+    },
+    "node_modules/motion-utils": {
+      "version": "14.1.1",
+      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-14.1.1.tgz",
+      "integrity": "sha512-3VvN5Uvf8B6qG+OfOui6Nht5EWp+vLuU3IqcAj7ItZGKqtmTjCebl5sGZF7/08gEHRnEl1AP/fIwbcEyVrcQGQ==",
+      "license": "MIT"
+    },
     "node_modules/ms": {
       "version": "2.1.3",
       "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
       "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
       "dev": true,
       "license": "MIT"
     },
     "node_modules/mz": {
       "version": "2.7.0",
       "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
@@ -5210,23 +7182,23 @@
       "version": "0.17.0",
       "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.17.0.tgz",
       "integrity": "sha512-z6F7K9bV85EfseRCp2bzrpyQ0Gkw1uLoCel9XBVWPg/TjRj94SkJzUTGfOa4bs7iJvBWtQG0Wq7wnI0syw3EBQ==",
       "dev": true,
       "license": "MIT",
       "engines": {
         "node": ">=0.10.0"
       }
     },
     "node_modules/react-remove-scroll": {
-      "version": "2.7.1",
-      "resolved": "https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.7.1.tgz",
-      "integrity": "sha512-HpMh8+oahmIdOuS5aFKKY6Pyog+FNaZV/XyJOq7b4YFwsFHe5yYfdbIalI4k3vU2nSDql7YskmUseHsRrJqIPA==",
+      "version": "2.7.2",
+      "resolved": "https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.7.2.tgz",
+      "integrity": "sha512-Iqb9NjCCTt6Hf+vOdNIZGdTiH1QSqr27H/Ek9sv/a97gfueI/5h1s3yRi1nngzMUaOOToin5dI1dXKdXiF+u0Q==",
       "license": "MIT",
       "dependencies": {
         "react-remove-scroll-bar": "^2.3.7",
         "react-style-singleton": "^2.2.3",
         "tslib": "^2.1.0",
         "use-callback-ref": "^1.3.3",
         "use-sidecar": "^1.1.3"
       },
       "engines": {
         "node": ">=10"
@@ -5658,20 +7630,36 @@
     },
     "node_modules/slick-carousel": {
       "version": "1.8.1",
       "resolved": "https://registry.npmjs.org/slick-carousel/-/slick-carousel-1.8.1.tgz",
       "integrity": "sha512-XB9Ftrf2EEKfzoQXt3Nitrt/IPbT+f1fgqBdoxO3W/+JYvtEOW6EgxnWfr9GH6nmULv7Y2tPmEX3koxThVmebA==",
       "license": "MIT",
       "peerDependencies": {
         "jquery": ">=1.8.0"
       }
     },
+    "node_modules/sonner": {
+      "version": "2.0.8",
+      "resolved": "https://registry.npmjs.org/sonner/-/sonner-2.0.8.tgz",
+      "integrity": "sha512-UM/ByIoFra8yzV75n1o0Puu0bw5U/9UNnDacrJNspekBewIfsQ3D6ez1nvlWpt7aTsO6rujQtifBpycwIivqlg==",
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "^18.0.0 || ^19.0.0",
+        "react": "^18.0.0 || ^19.0.0 || ^19.0.0-rc",
+        "react-dom": "^18.0.0 || ^19.0.0 || ^19.0.0-rc"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
     "node_modules/source-map-js": {
       "version": "1.2.1",
       "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
       "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
       "license": "BSD-3-Clause",
       "engines": {
         "node": ">=0.10.0"
       }
     },
     "node_modules/string-convert": {
diff --git a/package.json b/package.json
index 2cdd65b..ecd12ba 100644
--- a/package.json
+++ b/package.json
@@ -4,40 +4,47 @@
   "version": "0.0.0",
   "type": "module",
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "lint": "eslint .",
     "preview": "vite preview"
   },
   "dependencies": {
     "@popperjs/core": "^2.11.8",
+    "@radix-ui/react-accordion": "^1.3.1",
+    "@radix-ui/react-avatar": "^1.3.1",
     "@radix-ui/react-dialog": "^1.1.14",
+    "@radix-ui/react-dropdown-menu": "^2.2.1",
+    "@radix-ui/react-separator": "^1.2.0",
     "@radix-ui/react-slot": "^1.2.3",
+    "@radix-ui/react-tabs": "^1.2.1",
     "@reduxjs/toolkit": "^2.8.2",
     "@tailwindcss/vite": "^4.1.11",
     "@tanstack/react-query": "^5.84.1",
     "axios": "^1.10.0",
     "class-variance-authority": "^0.7.1",
     "clsx": "^2.1.1",
     "flowbite": "^3.1.2",
     "formik": "^2.4.6",
+    "framer-motion": "^14.3.0",
     "lucide-react": "^0.536.0",
     "react": "^18.3.1",
     "react-dom": "^18.3.1",
     "react-helmet": "^6.1.0",
     "react-hot-toast": "^2.5.2",
     "react-redux": "^9.2.0",
     "react-router-dom": "^7.6.3",
     "react-slick": "^0.30.3",
     "react-spinners": "^0.17.0",
     "slick-carousel": "^1.8.1",
+    "sonner": "^2.0.8",
     "tailwind-merge": "^3.3.1",
     "tailwindcss-animate": "^1.0.7",
     "yup": "^1.6.1"
   },
   "devDependencies": {
     "@eslint/js": "^9.29.0",
     "@types/react": "^19.1.8",
     "@types/react-dom": "^19.1.6",
     "@vitejs/plugin-react": "^4.5.2",
     "autoprefixer": "^10.4.21",
diff --git a/src/Components/magic/blur-fade.jsx b/src/Components/magic/blur-fade.jsx
new file mode 100644
index 0000000..b7a887e
--- /dev/null
+++ b/src/Components/magic/blur-fade.jsx
@@ -0,0 +1,17 @@
+import { motion as Motion } from "framer-motion"
+import { cn } from "@/lib/utils"
+
+export function BlurFade({ children, className, delay = 0, y = 16, ...props }) {
+  return (
+    <Motion.div
+      initial={{ opacity: 0, y, filter: "blur(6px)" }}
+      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
+      viewport={{ once: true, margin: "-40px" }}
+      transition={{ duration: 0.6, delay, ease: "easeOut" }}
+      className={cn(className)}
+      {...props}
+    >
+      {children}
+    </Motion.div>
+  )
+}
diff --git a/src/Components/magic/marquee.jsx b/src/Components/magic/marquee.jsx
new file mode 100644
index 0000000..9df9a2a
--- /dev/null
+++ b/src/Components/magic/marquee.jsx
@@ -0,0 +1,17 @@
+import { cn } from "@/lib/utils"
+
+export function Marquee({ className, children, repeat = 2 }) {
+  return (
+    <div className={cn("relative flex w-full overflow-hidden", className)}>
+      {Array.from({ length: repeat }).map((_, i) => (
+        <div
+          key={i}
+          aria-hidden={i > 0}
+          className="flex shrink-0 animate-marquee items-center gap-8 pr-8"
+        >
+          {children}
+        </div>
+      ))}
+    </div>
+  )
+}
diff --git a/src/Components/magic/number-ticker.jsx b/src/Components/magic/number-ticker.jsx
new file mode 100644
index 0000000..2a0d8d3
--- /dev/null
+++ b/src/Components/magic/number-ticker.jsx
@@ -0,0 +1,21 @@
+import * as React from "react"
+import { useMotionValue, useSpring, useTransform } from "framer-motion"
+import { cn } from "@/lib/utils"
+
+export function NumberTicker({ value = 0, className, decimals = 0, prefix = "", suffix = "" }) {
+  const motionValue = useMotionValue(0)
+  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 })
+  const display = useTransform(spring, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`)
+  const [text, setText] = React.useState(`${prefix}${(0).toFixed(decimals)}${suffix}`)
+
+  React.useEffect(() => {
+    motionValue.set(value)
+  }, [value, motionValue])
+
+  React.useEffect(() => {
+    const unsubscribe = display.on("change", (v) => setText(v))
+    return unsubscribe
+  }, [display])
+
+  return <span className={cn("font-display font-bold text-olive", className)}>{text}</span>
+}
diff --git a/src/Components/magic/shimmer-button.jsx b/src/Components/magic/shimmer-button.jsx
new file mode 100644
index 0000000..0110c2a
--- /dev/null
+++ b/src/Components/magic/shimmer-button.jsx
@@ -0,0 +1,24 @@
+import * as React from "react"
+import { cn } from "@/lib/utils"
+
+export const ShimmerButton = React.forwardRef(
+  ({ className, children, ...props }, ref) => {
+    return (
+      <button
+        ref={ref}
+        className={cn(
+          "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl border-2 border-ink bg-persimmon px-6 py-3 text-sm font-bold text-paper transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 active:translate-x-[2px] active:translate-y-[2px]",
+          className
+        )}
+        {...props}
+      >
+        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
+        <span
+          aria-hidden
+          className="pointer-events-none absolute inset-0 -translate-x-full bg-marigold/60 blur-md transition-transform duration-700 ease-out group-hover:translate-x-full"
+        />
+      </button>
+    )
+  }
+)
+ShimmerButton.displayName = "ShimmerButton"
diff --git a/src/Components/ui/accordion.jsx b/src/Components/ui/accordion.jsx
new file mode 100644
index 0000000..7986a87
--- /dev/null
+++ b/src/Components/ui/accordion.jsx
@@ -0,0 +1,45 @@
+import * as React from "react"
+import * as AccordionPrimitive from "@radix-ui/react-accordion"
+import { ChevronDown } from "lucide-react"
+import { cn } from "@/lib/utils"
+
+const Accordion = AccordionPrimitive.Root
+
+const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
+  <AccordionPrimitive.Item
+    ref={ref}
+    className={cn("rounded-2xl border-2 border-ink bg-paper px-4", className)}
+    {...props}
+  />
+))
+AccordionItem.displayName = "AccordionItem"
+
+const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
+  <AccordionPrimitive.Header className="flex">
+    <AccordionPrimitive.Trigger
+      ref={ref}
+      className={cn(
+        "flex flex-1 items-center justify-between py-4 font-display text-base font-semibold text-ink transition-all hover:text-persimmon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 [&[data-state=open]>svg]:rotate-180",
+        className
+      )}
+      {...props}
+    >
+      {children}
+      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
+    </AccordionPrimitive.Trigger>
+  </AccordionPrimitive.Header>
+))
+AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
+
+const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
+  <AccordionPrimitive.Content
+    ref={ref}
+    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
+    {...props}
+  >
+    <div className={cn("pb-4 pt-0 text-ink/80", className)}>{children}</div>
+  </AccordionPrimitive.Content>
+))
+AccordionContent.displayName = AccordionPrimitive.Content.displayName
+
+export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
diff --git a/src/Components/ui/avatar.jsx b/src/Components/ui/avatar.jsx
new file mode 100644
index 0000000..a6a95c2
--- /dev/null
+++ b/src/Components/ui/avatar.jsx
@@ -0,0 +1,28 @@
+import * as React from "react"
+import * as AvatarPrimitive from "@radix-ui/react-avatar"
+import { cn } from "@/lib/utils"
+
+const Avatar = React.forwardRef(({ className, ...props }, ref) => (
+  <AvatarPrimitive.Root
+    ref={ref}
+    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-ink", className)}
+    {...props}
+  />
+))
+Avatar.displayName = AvatarPrimitive.Root.displayName
+
+const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
+  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
+))
+AvatarImage.displayName = AvatarPrimitive.Image.displayName
+
+const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
+  <AvatarPrimitive.Fallback
+    ref={ref}
+    className={cn("flex h-full w-full items-center justify-center rounded-full bg-clay font-display text-sm font-semibold text-ink", className)}
+    {...props}
+  />
+))
+AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
+
+export { Avatar, AvatarImage, AvatarFallback }
diff --git a/src/Components/ui/badge.jsx b/src/Components/ui/badge.jsx
new file mode 100644
index 0000000..a62be45
--- /dev/null
+++ b/src/Components/ui/badge.jsx
@@ -0,0 +1,28 @@
+/* eslint-disable react-refresh/only-export-components */
+import { cva } from "class-variance-authority"
+import { cn } from "@/lib/utils"
+
+const badgeVariants = cva(
+  "inline-flex items-center rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
+  {
+    variants: {
+      variant: {
+        default: "bg-persimmon text-paper",
+        olive: "bg-olive text-paper",
+        marigold: "bg-marigold text-ink",
+        brick: "bg-brick text-paper",
+        clay: "bg-clay text-ink",
+        outline: "bg-paper text-ink",
+      },
+    },
+    defaultVariants: {
+      variant: "default",
+    },
+  }
+)
+
+function Badge({ className, variant, ...props }) {
+  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
+}
+
+export { Badge, badgeVariants }
diff --git a/src/Components/ui/card.jsx b/src/Components/ui/card.jsx
new file mode 100644
index 0000000..3f5a46a
--- /dev/null
+++ b/src/Components/ui/card.jsx
@@ -0,0 +1,42 @@
+import * as React from "react"
+import { cn } from "@/lib/utils"
+
+const Card = React.forwardRef(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn("rounded-2xl border-2 border-ink bg-paper text-ink shadow-sm", className)}
+    {...props}
+  />
+))
+Card.displayName = "Card"
+
+const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
+  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-5", className)} {...props} />
+))
+CardHeader.displayName = "CardHeader"
+
+const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn("font-display text-xl font-semibold leading-none tracking-tight", className)}
+    {...props}
+  />
+))
+CardTitle.displayName = "CardTitle"
+
+const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
+  <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
+))
+CardDescription.displayName = "CardDescription"
+
+const CardContent = React.forwardRef(({ className, ...props }, ref) => (
+  <div ref={ref} className={cn("p-5", className)} {...props} />
+))
+CardContent.displayName = "CardContent"
+
+const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
+  <div ref={ref} className={cn("flex items-center p-5 pt-0", className)} {...props} />
+))
+CardFooter.displayName = "CardFooter"
+
+export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
diff --git a/src/Components/ui/carousel.jsx b/src/Components/ui/carousel.jsx
new file mode 100644
index 0000000..9040f40
--- /dev/null
+++ b/src/Components/ui/carousel.jsx
@@ -0,0 +1,81 @@
+import * as React from "react"
+import { ChevronLeft, ChevronRight } from "lucide-react"
+import { cn } from "@/lib/utils"
+
+const Carousel = React.forwardRef(({ className, children, ...props }, ref) => (
+  <div ref={ref} className={cn("relative", className)} {...props}>
+    {children}
+  </div>
+))
+Carousel.displayName = "Carousel"
+
+const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
+  const scrollRef = React.useRef(null)
+  React.useImperativeHandle(ref, () => scrollRef.current)
+  return (
+    <div
+      ref={scrollRef}
+      className={cn(
+        "flex gap-4 overflow-x-auto scroll-smooth pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
+        className
+      )}
+      {...props}
+    >
+      {children}
+    </div>
+  )
+})
+CarouselContent.displayName = "CarouselContent"
+
+const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn("shrink-0 [scroll-snap-align:start]", className)}
+    {...props}
+  />
+))
+CarouselItem.displayName = "CarouselItem"
+
+function CarouselPrevious({ className, targetRef, ...props }) {
+  const scroll = () => {
+    const el = typeof targetRef === "string" ? document.querySelector(targetRef) : targetRef?.current
+    if (el) el.scrollBy({ left: -320, behavior: "smooth" })
+  }
+  return (
+    <button
+      type="button"
+      aria-label="Scroll left"
+      onClick={scroll}
+      className={cn(
+        "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2",
+        className
+      )}
+      {...props}
+    >
+      <ChevronLeft className="h-5 w-5" />
+    </button>
+  )
+}
+
+function CarouselNext({ className, targetRef, ...props }) {
+  const scroll = () => {
+    const el = typeof targetRef === "string" ? document.querySelector(targetRef) : targetRef?.current
+    if (el) el.scrollBy({ left: 320, behavior: "smooth" })
+  }
+  return (
+    <button
+      type="button"
+      aria-label="Scroll right"
+      onClick={scroll}
+      className={cn(
+        "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2",
+        className
+      )}
+      {...props}
+    >
+      <ChevronRight className="h-5 w-5" />
+    </button>
+  )
+}
+
+export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
diff --git a/src/Components/ui/dialog.jsx b/src/Components/ui/dialog.jsx
new file mode 100644
index 0000000..e86988a
--- /dev/null
+++ b/src/Components/ui/dialog.jsx
@@ -0,0 +1,86 @@
+import * as React from "react"
+import * as DialogPrimitive from "@radix-ui/react-dialog"
+import { X } from "lucide-react"
+import { cn } from "@/lib/utils"
+
+const Dialog = DialogPrimitive.Root
+const DialogTrigger = DialogPrimitive.Trigger
+const DialogPortal = DialogPrimitive.Portal
+const DialogClose = DialogPrimitive.Close
+
+const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
+  <DialogPrimitive.Overlay
+    ref={ref}
+    className={cn(
+      "fixed inset-0 z-50 bg-ink/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
+      className
+    )}
+    {...props}
+  />
+))
+DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
+
+const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
+  <DialogPortal>
+    <DialogOverlay />
+    <DialogPrimitive.Content
+      ref={ref}
+      className={cn(
+        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-2xl border-2 border-ink bg-paper p-6 text-ink shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
+        className
+      )}
+      {...props}
+    >
+      {children}
+      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-lg border-2 border-transparent p-1 text-ink opacity-70 transition-opacity hover:border-ink hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-persimmon focus:ring-offset-2 disabled:pointer-events-none">
+        <X className="h-4 w-4" />
+        <span className="sr-only">Close</span>
+      </DialogPrimitive.Close>
+    </DialogPrimitive.Content>
+  </DialogPortal>
+))
+DialogContent.displayName = DialogPrimitive.Content.displayName
+
+const DialogHeader = ({ className, ...props }) => (
+  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
+)
+DialogHeader.displayName = "DialogHeader"
+
+const DialogFooter = ({ className, ...props }) => (
+  <div
+    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
+    {...props}
+  />
+)
+DialogFooter.displayName = "DialogFooter"
+
+const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
+  <DialogPrimitive.Title
+    ref={ref}
+    className={cn("font-display text-lg font-semibold leading-none tracking-tight", className)}
+    {...props}
+  />
+))
+DialogTitle.displayName = DialogPrimitive.Title.displayName
+
+const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
+  <DialogPrimitive.Description
+    ref={ref}
+    className={cn("text-sm text-muted-foreground", className)}
+    {...props}
+  />
+))
+DialogDescription.displayName = DialogPrimitive.Description.displayName
+
+export {
+  Dialog,
+  DialogPortal,
+  DialogOverlay,
+  DialogClose,
+  DialogTrigger,
+  DialogContent,
+  DialogHeader,
+  DialogFooter,
+  DialogTitle,
+  DialogDescription,
+}
diff --git a/src/Components/ui/dropdown-menu.jsx b/src/Components/ui/dropdown-menu.jsx
new file mode 100644
index 0000000..f1b8a03
--- /dev/null
+++ b/src/Components/ui/dropdown-menu.jsx
@@ -0,0 +1,147 @@
+import * as React from "react"
+import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
+import { Check, ChevronRight, Circle } from "lucide-react"
+import { cn } from "@/lib/utils"
+
+const DropdownMenu = DropdownMenuPrimitive.Root
+const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
+const DropdownMenuGroup = DropdownMenuPrimitive.Group
+const DropdownMenuPortal = DropdownMenuPrimitive.Portal
+const DropdownMenuSub = DropdownMenuPrimitive.Sub
+const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
+
+const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
+  <DropdownMenuPrimitive.SubTrigger
+    ref={ref}
+    className={cn(
+      "flex cursor-default select-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-ink outline-none focus:bg-clay data-[state=open]:bg-clay",
+      inset && "pl-8",
+      className
+    )}
+    {...props}
+  >
+    {children}
+    <ChevronRight className="ml-auto h-4 w-4" />
+  </DropdownMenuPrimitive.SubTrigger>
+))
+DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName
+
+const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
+  <DropdownMenuPrimitive.SubContent
+    ref={ref}
+    className={cn(
+      "z-50 min-w-[8rem] overflow-hidden rounded-xl border-2 border-ink bg-paper p-1 text-ink shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
+      className
+    )}
+    {...props}
+  />
+))
+DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName
+
+const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
+  <DropdownMenuPrimitive.Portal>
+    <DropdownMenuPrimitive.Content
+      ref={ref}
+      sideOffset={sideOffset}
+      className={cn(
+        "z-50 min-w-[8rem] overflow-hidden rounded-xl border-2 border-ink bg-paper p-1 text-ink shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
+        className
+      )}
+      {...props}
+    />
+  </DropdownMenuPrimitive.Portal>
+))
+DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
+
+const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
+  <DropdownMenuPrimitive.Item
+    ref={ref}
+    className={cn(
+      "relative flex cursor-default select-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-ink outline-none transition-colors focus:bg-clay data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
+      inset && "pl-8",
+      className
+    )}
+    {...props}
+  />
+))
+DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
+
+const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
+  <DropdownMenuPrimitive.CheckboxItem
+    ref={ref}
+    className={cn(
+      "relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm font-medium text-ink outline-none transition-colors focus:bg-clay data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
+      className
+    )}
+    checked={checked}
+    {...props}
+  >
+    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
+      <DropdownMenuPrimitive.ItemIndicator>
+        <Check className="h-4 w-4" />
+      </DropdownMenuPrimitive.ItemIndicator>
+    </span>
+    {children}
+  </DropdownMenuPrimitive.CheckboxItem>
+))
+DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName
+
+const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
+  <DropdownMenuPrimitive.RadioItem
+    ref={ref}
+    className={cn(
+      "relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm font-medium text-ink outline-none transition-colors focus:bg-clay data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
+      className
+    )}
+    {...props}
+  >
+    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
+      <DropdownMenuPrimitive.ItemIndicator>
+        <Circle className="h-2 w-2 fill-current" />
+      </DropdownMenuPrimitive.ItemIndicator>
+    </span>
+    {children}
+  </DropdownMenuPrimitive.RadioItem>
+))
+DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName
+
+const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
+  <DropdownMenuPrimitive.Label
+    ref={ref}
+    className={cn("px-2 py-1.5 font-display text-sm font-semibold text-ink", inset && "pl-8", className)}
+    {...props}
+  />
+))
+DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
+
+const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
+  <DropdownMenuPrimitive.Separator
+    ref={ref}
+    className={cn("-mx-1 my-1 h-[2px] bg-clay", className)}
+    {...props}
+  />
+))
+DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
+
+const DropdownMenuShortcut = ({ className, ...props }) => (
+  <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
+)
+DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
+
+export {
+  DropdownMenu,
+  DropdownMenuTrigger,
+  DropdownMenuContent,
+  DropdownMenuItem,
+  DropdownMenuCheckboxItem,
+  DropdownMenuRadioItem,
+  DropdownMenuLabel,
+  DropdownMenuSeparator,
+  DropdownMenuShortcut,
+  DropdownMenuGroup,
+  DropdownMenuPortal,
+  DropdownMenuSub,
+  DropdownMenuSubContent,
+  DropdownMenuSubTrigger,
+  DropdownMenuRadioGroup,
+}
diff --git a/src/Components/ui/input.jsx b/src/Components/ui/input.jsx
new file mode 100644
index 0000000..3f01f0e
--- /dev/null
+++ b/src/Components/ui/input.jsx
@@ -0,0 +1,19 @@
+import * as React from "react"
+import { cn } from "@/lib/utils"
+
+const Input = React.forwardRef(({ className, type, ...props }, ref) => {
+  return (
+    <input
+      type={type}
+      className={cn(
+        "flex h-10 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2 text-sm text-ink placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
+        className
+      )}
+      ref={ref}
+      {...props}
+    />
+  )
+})
+Input.displayName = "Input"
+
+export { Input }
diff --git a/src/Components/ui/pagination.jsx b/src/Components/ui/pagination.jsx
new file mode 100644
index 0000000..0c70961
--- /dev/null
+++ b/src/Components/ui/pagination.jsx
@@ -0,0 +1,79 @@
+import * as React from "react"
+import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
+import { cn } from "@/lib/utils"
+
+const Pagination = ({ className, ...props }) => (
+  <nav
+    role="navigation"
+    aria-label="pagination"
+    className={cn("mx-auto flex w-full justify-center", className)}
+    {...props}
+  />
+)
+Pagination.displayName = "Pagination"
+
+const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
+  <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
+))
+PaginationContent.displayName = "PaginationContent"
+
+const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
+  <li ref={ref} className={cn("", className)} {...props} />
+))
+PaginationItem.displayName = "PaginationItem"
+
+function PaginationLink({ className, isActive, size = "icon", ...props }) {
+  return (
+    <a
+      aria-current={isActive ? "page" : undefined}
+      className={cn(
+        "inline-flex h-10 min-w-10 items-center justify-center rounded-xl border-2 border-ink px-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2",
+        isActive ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-marigold",
+        size === "default" && "h-10 px-4",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+PaginationLink.displayName = "PaginationLink"
+
+function PaginationPrevious({ className, ...props }) {
+  return (
+    <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
+      <ChevronLeft className="h-4 w-4" />
+      <span>Previous</span>
+    </PaginationLink>
+  )
+}
+PaginationPrevious.displayName = "PaginationPrevious"
+
+function PaginationNext({ className, ...props }) {
+  return (
+    <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
+      <span>Next</span>
+      <ChevronRight className="h-4 w-4" />
+    </PaginationLink>
+  )
+}
+PaginationNext.displayName = "PaginationNext"
+
+function PaginationEllipsis({ className, ...props }) {
+  return (
+    <span aria-hidden className={cn("flex h-10 w-10 items-center justify-center", className)} {...props}>
+      <MoreHorizontal className="h-4 w-4 text-ink" />
+      <span className="sr-only">More pages</span>
+    </span>
+  )
+}
+PaginationEllipsis.displayName = "PaginationEllipsis"
+
+export {
+  Pagination,
+  PaginationContent,
+  PaginationEllipsis,
+  PaginationItem,
+  PaginationLink,
+  PaginationNext,
+  PaginationPrevious,
+}
diff --git a/src/Components/ui/separator.jsx b/src/Components/ui/separator.jsx
new file mode 100644
index 0000000..94458b6
--- /dev/null
+++ b/src/Components/ui/separator.jsx
@@ -0,0 +1,22 @@
+import * as React from "react"
+import * as SeparatorPrimitive from "@radix-ui/react-separator"
+import { cn } from "@/lib/utils"
+
+const Separator = React.forwardRef(
+  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
+    <SeparatorPrimitive.Root
+      ref={ref}
+      decorative={decorative}
+      orientation={orientation}
+      className={cn(
+        "shrink-0 bg-clay",
+        orientation === "horizontal" ? "h-[2px] w-full" : "h-full w-[2px]",
+        className
+      )}
+      {...props}
+    />
+  )
+)
+Separator.displayName = SeparatorPrimitive.Root.displayName
+
+export { Separator }
diff --git a/src/Components/ui/skeleton.jsx b/src/Components/ui/skeleton.jsx
new file mode 100644
index 0000000..1d4c47b
--- /dev/null
+++ b/src/Components/ui/skeleton.jsx
@@ -0,0 +1,7 @@
+import { cn } from "@/lib/utils"
+
+function Skeleton({ className, ...props }) {
+  return <div className={cn("animate-pulse rounded-xl bg-clay", className)} {...props} />
+}
+
+export { Skeleton }
diff --git a/src/Components/ui/sonner.jsx b/src/Components/ui/sonner.jsx
new file mode 100644
index 0000000..e60bacb
--- /dev/null
+++ b/src/Components/ui/sonner.jsx
@@ -0,0 +1,22 @@
+import { Toaster as Sonner } from "sonner"
+
+function Toaster({ ...props }) {
+  return (
+    <Sonner
+      theme="light"
+      position="bottom-right"
+      toastOptions={{
+        style: {
+          background: "#FAF6F0",
+          color: "#191410",
+          border: "2px solid #191410",
+          borderRadius: "1rem",
+          fontFamily: '"Space Grotesk", system-ui, sans-serif',
+        },
+      }}
+      {...props}
+    />
+  )
+}
+
+export { Toaster }
diff --git a/src/Components/ui/tabs.jsx b/src/Components/ui/tabs.jsx
new file mode 100644
index 0000000..e58efe0
--- /dev/null
+++ b/src/Components/ui/tabs.jsx
@@ -0,0 +1,43 @@
+import * as React from "react"
+import * as TabsPrimitive from "@radix-ui/react-tabs"
+import { cn } from "@/lib/utils"
+
+const Tabs = TabsPrimitive.Root
+
+const TabsList = React.forwardRef(({ className, ...props }, ref) => (
+  <TabsPrimitive.List
+    ref={ref}
+    className={cn(
+      "inline-flex h-11 items-center justify-center gap-1 rounded-xl border-2 border-ink bg-paper p-1 text-ink",
+      className
+    )}
+    {...props}
+  />
+))
+TabsList.displayName = TabsPrimitive.List.displayName
+
+const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
+  <TabsPrimitive.Trigger
+    ref={ref}
+    className={cn(
+      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold ring-offset-paper transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-ink data-[state=active]:text-paper",
+      className
+    )}
+    {...props}
+  />
+))
+TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
+
+const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
+  <TabsPrimitive.Content
+    ref={ref}
+    className={cn(
+      "mt-2 ring-offset-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2",
+      className
+    )}
+    {...props}
+  />
+))
+TabsContent.displayName = TabsPrimitive.Content.displayName
+
+export { Tabs, TabsList, TabsTrigger, TabsContent }
diff --git a/src/index.css b/src/index.css
index db062e8..9f59853 100644
--- a/src/index.css
+++ b/src/index.css
@@ -22,22 +22,39 @@
     --secondary-foreground: 40 33% 97%;
     --accent: 40 100% 57%;
     --accent-foreground: 20 20% 8%;
     --muted: 38 30% 89%;
     --muted-foreground: 20 10% 35%;
     --border: 38 30% 82%;
     --input: 38 30% 82%;
     --ring: 14 77% 54%;
     --destructive: 2 66% 44%;
     --destructive-foreground: 40 33% 97%;
+    --popover: 40 33% 97%;
+    --popover-foreground: 20 20% 8%;
+    --chart-1: 14 77% 54%;
+    --chart-2: 131 24% 17%;
+    --chart-3: 40 100% 58%;
+    --chart-4: 41 23% 73%;
+    --chart-5: 358 66% 45%;
     --radius: 1rem;
     --font-display: "Fraunces", Georgia, serif;
     --font-sans: "Space Grotesk", system-ui, sans-serif;
   }
   body { @apply bg-[#FAF6F0] text-[#191410]; font-family: var(--font-sans); }
   .font-display { font-family: var(--font-display); }
   * { @apply border-border; }
   .active { @apply text-[#E4572E] underline underline-offset-4; }
   .hard-shadow { box-shadow: 4px 4px 0 #191410; }
   .hard-shadow-sm { box-shadow: 2px 2px 0 #191410; }
   .grain::after { content:""; position:absolute; inset:0; pointer-events:none; opacity:.05; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E"); }
 }
+
+@keyframes marquee {
+  to { transform: translateX(-100%); }
+}
+
+@layer utilities {
+  .animate-marquee {
+    animation: marquee 22s linear infinite;
+  }
+}
