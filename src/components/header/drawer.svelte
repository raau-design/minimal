<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  interface Props {
    menu?: import("svelte").Snippet;
  }

  let { menu }: Props = $props();
</script>

<Drawer.Root>
  <Drawer.Trigger class="rounded-full p-2">
    {@render menu?.()}
  </Drawer.Trigger>
  <Drawer.Content>
    <div class="mx-auto w-full max-w-sm">
      <Drawer.Header>
        <Drawer.Title class="text-2xl">RAAU</Drawer.Title>
        <Drawer.Description>Utopia Design</Drawer.Description>
      </Drawer.Header>
      <div class="px-4 pb-0">
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/"
              class="block rounded-md px-3 py-2 hover:bg-[#ebebeb] dark:hover:bg-[#1f1f1f]"
              aria-current="page">Home</a
            >
            <a
              href="/"
              class="block rounded-md px-3 py-2 hover:bg-[#ebebeb] dark:hover:bg-[#1f1f1f]"
              aria-current="page">Home</a
            >
            <a
              href="/"
              class="block rounded-md px-3 py-2 hover:bg-[#ebebeb] dark:hover:bg-[#1f1f1f]"
              aria-current="page">Home</a
            >
          </div>
        </div>
      </div>
      <Drawer.Footer>
        <Drawer.Close class={buttonVariants({ variant: "outline" })}
          >Close</Drawer.Close
        >
      </Drawer.Footer>
    </div>
  </Drawer.Content>
</Drawer.Root>
