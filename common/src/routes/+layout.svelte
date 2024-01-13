<script lang="ts">
  import "../app.pcss";
  import Toolbar from "$lib/Toolbar/index.svelte";
  import type {Exercise} from "$lib";

  let exercises: Exercise[] = [
    {
      number: "1",
      name: "Hello World",
      slug: "1-hello-world",
      description: "A simple hello world exercise",
      difficulty: 1,
    },
  ];

</script>

<Toolbar {exercises}></Toolbar>
<slot></slot>
