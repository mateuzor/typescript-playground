### Singleton

- **Problema**: garantir **uma única instância** global com ponto de acesso controlado (ex.: config, cache).
- **Ideia**: construtor privado + método estático que memoiza a instância.
- **Quando usar**: recursos compartilhados e caros; invariantes globais.
- **Trade-offs**: vira **estado global** (dificulta testes, acoplamento). Prefira injetar dependências quando possível.
- **TS tip**: exponha `instance()` e marque o construtor como `private`.
