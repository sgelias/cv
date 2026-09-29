# Public Domain Software

Over the past three years, independent work has been dedicated to the development of bioinformatics and web-native tools released as free and open-source solutions. The overarching objective is to deliver meaningful contributions to the scientific community and to society at large, through tools of practical relevance to both specialist and non-specialist users. The principal tools developed include:

## Zombie Crab Project {#zombie-crab-project .sw}

An open-source platform that gives every user their own real, isolated AI agent behind a single authenticated entry point, exposed through an OpenAI-compatible HTTP API. It was built because self-hosted assistants such as PicoClaw follow a "one agent, one owner" model: when several people share the same process, a single prompt injection or leaky tool is enough for one user to read another's conversations, files and secrets. The stack answers this with three independent layers — an edge (the Mycelium gateway), which authenticates the caller and injects a verified, unforgeable identity; an orchestrator (crab-shell-proxy), which gives each (agent, user) pair its own non-root container and volume; and a swappable agent harness — so that isolation is enforced by the kernel rather than by application code. Agents can scale to zero when idle or run continuously, and the chat client adds workspace memory, a knowledge graph, scheduled tasks, files and secrets management; the whole stack is deployed with Docker Compose and licensed under MIT or Apache-2.0. It is the choice for any organisation that wants to offer AI agents to many people at once without letting one user's agent ever reach another user's data.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/zombie-crab-project) [Documentation](https://lepistabioinformatics.github.io/zombie-crab-project/)

</div>

### crab-shell-proxy {#crab-shell-proxy .sw}

The Go orchestrator at the centre of the Zombie Crab stack. For every request, it reads the target agent and the caller's account from the identity injected by the gateway — always the stable account id, never the e-mail — ensures that this member's own container is running, starting it on demand and stopping it when idle, and relays the conversation to it. It translates OpenAI-style HTTP into each harness's native protocol and answers explicitly, naming the harness, whenever a capability is not available, instead of failing silently. It also hosts the model registry, the knowledge-graph memory (served to agents over MCP with scoped tokens), scheduled tasks and projects, and it talks to Docker through its own minimal client, keeping secrets out of the images. You would use it whenever each user must get a dedicated, disposable agent environment on demand, managed by a single, auditable control plane.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/crab-shell-proxy) [Documentation](https://lepistabioinformatics.github.io/zombie-crab-project/50-crab-shell-proxy.html)

</div>

### crab-exoskeleton-webapp {#crab-exoskeleton-webapp .sw}

The chat web application of the Zombie Crab stack, through which members talk to their agents and operators govern the fleet. Built with Next.js 15 as a backend-for-frontend, it keeps every credential on the server: the browser holds only an HTTP-only session cookie, with no token, account id or upstream address, and each request flows through the gateway and the orchestrator before reaching the agent. Sign-in is passwordless, through a magic link with a six-digit code; conversations are indexed in PostgreSQL; and the configuration is read at request time, so a single image serves every deployment. It is backed by a suite of more than 1,700 automated tests. You would use it to give end users a familiar chat experience on top of isolated agents without ever exposing tokens or infrastructure details to the browser.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/crab-exoskeleton-webapp) [Documentation](https://lepistabioinformatics.github.io/zombie-crab-project/52-crab-exoskeleton-webapp.html)

</div>

### crab-ganglion-harness {#crab-ganglion-harness .sw}

The agent runtime written for the Zombie Crab project and now its default harness. Running inside each member's container, it holds the conversation, calls the language model, executes tools and records the transcript, exposing a native HTTP+SSE interface through which narration and reasoning are streamed live. It was created when the limits of the original assistant began to cost more than they saved, and it is designed for safety and simplicity: a single static Go binary with no third-party dependencies, whose shell tool runs inside a Linux Landlock sandbox that confines each turn to its own workspace and refuses to start if that protection is unavailable. It ships with web search and fetch, image generation, sub-agents, history search and MCP tools, caps the number of tool iterations per turn, and follows a hexagonal architecture enforced by tests. You would use it when you need an agent runtime that is small enough to audit and whose sandbox is guaranteed by the kernel itself.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/crab-ganglion-harness) [Documentation](https://lepistabioinformatics.github.io/zombie-crab-project/51-crab-ganglion-harness.html)

</div>

### harness-sphere {#harness-sphere .sw}

A single-binary OpenTelemetry watcher, written in Rust, that turns the state of the host, the gateway, the orchestrator, the web application and every agent container into standard metrics. It was built because the stack previously emitted no telemetry at all, making it impossible to tell whether an agent slowed down because of the agent or because of the machine underneath it. It models six explicit layers, collects data per member, and is designed never to take itself down: each collector runs in isolation, failures are contained and retried with back-off, and it deliberately never touches the Docker socket, token costs or conversation content. You would use it to observe a multi-tenant agent platform in production with Grafana or any OpenTelemetry backend, without compromising the privacy of users' conversations.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/harness-sphere) [Documentation](https://lepistabioinformatics.github.io/zombie-crab-project/53-harness-sphere.html)

</div>

### crab-mangrove-network {#crab-mangrove-network .sw}

An experimental federated memory network that lets agents share knowledge over the ActivityPub vocabulary, each agent being an identified bot actor owned by its human and governed by Mycelium roles. It addresses a limitation of private memory: two people working on the same problem build two disjoint knowledge graphs and rediscover the same facts twice. Authority flows in one direction only — nothing can be shared beyond the sharer's reach, agents cannot broadcast to groups, and every share waits for the recipient's human to admit it — while memory is kept as an append-only log of ed25519-signed activities, so that one author can never overwrite another's. Written using only the Go standard library, it is entirely optional, and the stack runs unchanged without it. You would use it when teams want their agents to build on each other's findings while every human keeps control over what reaches their own agent.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/crab-mangrove-network) [Documentation](https://lepistabioinformatics.github.io/zombie-crab-project/54-crab-mangrove-network.html)

</div>

## Mycelium API Gateway {#mycelium-api-gateway .sw}

An open and free API gateway, written in Rust, designed for modern, multi-tenant and API-oriented environments. It centralises authentication, identity normalisation, routing and policy enforcement: coarse, role-based checks are made at the gateway, while a verified profile injected into each request — treated as an active capability object rather than a mere identity payload — allows downstream services to take fine-grained, contextual decisions. It supports tenants, account types and security groups, sign-in through magic links, OAuth2 providers and Telegram, a JSON-RPC administration interface, webhooks, envelope encryption and key rotation, and it can expose downstream APIs as tools for AI agents through the Model Context Protocol (MCP). It runs with PostgreSQL, Redis and Vault or as a standalone binary with no external dependencies, and holds the OpenSSF Best Practices badge. You would use it to protect a set of APIs shared by several organisations behind a single entry point, keeping the security rules in one auditable place instead of scattering them across every service.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/mycelium) [Documentation](https://lepistabioinformatics.github.io/mycelium/)

</div>

## Mycelium WebApp {#mycelium-webapp .sw}

The official web interface of the Mycelium API Gateway, designed to allow rapid implementation of access policies to the gateway's endpoints without the need for additional implementation. Built with React 19, Vite and TypeScript, it offers login through any OAuth 2.0 provider, a dashboard, and the management of tenants, accounts and sharing, roles, fine-grained connection strings and webhooks, with a mobile-friendly and multilingual layout. You would use it to administer a Mycelium deployment visually, delegating day-to-day access management to operators who do not need to handle the gateway's configuration directly.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/mycelium-webapp)

</div>

## Blutils CLI {#blutils-cli .sw}

A high-performance command-line wrapper for NCBI BLASTn, written in Rust and distributed on crates.io, that improves on BLAST's native parallelism and adds an exclusive consensus algorithm for taxonomic identification. When a query sequence matches several reference organisms with similar scores, Blutils resolves these multiple identities into a single consensus, using presets tailored to fungi and eukaryotes (ITS cut-offs), to bacteria (16S rRNA) or custom thresholds, and two strategies — cautious, which keeps the shortest reliable taxonomic path, and relaxed, which keeps the longest. It builds its reference database from the NCBI taxonomy and a BLAST database, and writes results as JSON, JSONL or YAML, ready for downstream pipelines. You would use it to classify large sets of amplicon or metabarcoding sequences quickly and with reproducible, explainable taxonomic assignments.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/blutils) [Documentation](https://github.com/LepistaBioinformatics/blutils/blob/main/docs/book/README.md) [Crates](https://crates.io/crates/blutils-cli)

</div>

## Blutils UI {#blutils-ui .sw}

A visual explorer for the consensus results produced by Blutils CLI, running entirely in the browser and published on GitHub Pages. The user simply loads the results file and explores it in three complementary views — a filterable table, a tree grouped by taxonomic rank and a network grouped by query sequence — together with a composition chart that explains why each consensus identity was selected. Because all processing happens on the client, the data never leaves the user's computer. You would use it to inspect and communicate taxonomic results without installing anything and without uploading sensitive data to a server.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/blutils-ui) [Online Interface](https://lepistabioinformatics.github.io/blutils-ui/)

</div>

## Classeq {#classeq .sw}

An alignment-free phylogenetic placer of biological sequences, written in Rust, that positions new DNA sequences on a predefined reference phylogeny based on their k-mer composition. It is the improved implementation of the classifier developed during my doctoral research, and it avoids the cost of multiple sequence alignment while keeping the results anchored in an explicit evolutionary tree, supplied as a rooted Newick file with its reference sequences. It is available as a command-line tool and as an API server for distributed placement, and it emits OpenTelemetry logs and traces; the project is still under active development. You would use it to classify sequences quickly against a curated phylogeny, obtaining placements that can be interpreted in evolutionary terms rather than as simple similarity hits.

<div class="pills">

[GitHub](https://github.com/LepistaBioinformatics/classeq2) [Documentation](https://github.com/LepistaBioinformatics/classeq2/blob/main/docs/README.md)

</div>
