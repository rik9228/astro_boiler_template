/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

namespace App {
  interface Locals {
    // runtime を　Locals に追加
    runtime: CloudflareWorkerRuntime;
  }
}
