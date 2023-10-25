from hashlib import md5

class Node:
    def __init__(self, key, value) -> None:
        self.key = key
        self.value = value
        self.next = None
    
class HashTable:
    def __init__(self) -> None:
        self.capacity = 10
        self.buckets = [None] * self.capacity
        
    @staticmethod
    def count_ind(value: str):
        # строку нужно encode перед хешированием
        value = value.encode('utf-8')
        # md5 - тип хеша
        hashed = md5(value)
        # в 16-ричной - чтобы не было ошибки "unsupported operand type for %: '_hashlib.HASH' and 'int'"
        return int(hashed.hexdigest(), 16) % 10
    
    def insert(self, key: str, value):
        num = self.count_ind(key)
        if not self.buckets[num]:
            self.buckets[num] = Node(key, value)
        else:
            node = self.buckets[num]
            while node.next:
                node = node.next
            node.next = Node(key, value)

    def search(self, key):
        num = self.count_ind(key)
        node = self.buckets[num]
        res = []
        while node:
            if node.key == key:
                res.append(node.value)
            node = node.next
        return res



# print(HashTable().count_ind('asdf'))
hash_table = HashTable()
hash_table.insert('пк', {'name': 'мак про', 'price': 5000})
hash_table.insert('смартфон', {'name': 'айфон', 'price': 2000})
hash_table.insert('ноутбук', {'name': 'honor', 'price': 3000})
# print(hash_table.buckets)
smartphones = hash_table.search('смартфон')
print(smartphones)    # [{'name': 'айфон', 'price': 2000}]
