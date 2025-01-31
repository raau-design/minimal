<script lang="ts">
    import { resetMode, setMode } from "mode-watcher";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import SunMoon from "lucide-svelte/icons/sun-moon"; // Astro fast
    // import { SunMoon } from "lucide-svelte";  // Astro slow
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger class={buttonVariants({ variant: "outline" })}>
        <span class="px-2">
            <SunMoon />
        </span>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        <DropdownMenu.Item
            class="cursor-pointer ease-in duration-150"
            onclick={() => setMode("light")}
        >
            Light
        </DropdownMenu.Item>
        <DropdownMenu.Item
            class="cursor-pointer ease-in duration-150"
            onclick={() => setMode("dark")}
        >
            Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item
            class="cursor-pointer ease-in duration-150"
            onclick={() => resetMode()}
        >
            System
        </DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>
