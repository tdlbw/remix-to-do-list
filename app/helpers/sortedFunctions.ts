interface CreatedTime {
  createdAt: Date
}

export function sortByCreatedTime<T extends CreatedTime>(a: T, b: T) {
  if (a.createdAt > b.createdAt) {
    return 1
  } else return -1
}
