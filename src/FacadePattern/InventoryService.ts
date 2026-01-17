export class InventoryService {
  checkItemStock(itemId: string): boolean {
    console.log(`Checking stock for item: ${itemId}`);
    return true;
  }
}