export async function disconnect(orm) {
  await orm.$disconnect();
}
