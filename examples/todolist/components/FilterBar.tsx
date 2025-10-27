import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FilterType } from '../types';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
}

export const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange, counts }) => {
  const filters: { type: FilterType; label: string }[] = [
    { type: FilterType.ALL, label: '全部' },
    { type: FilterType.ACTIVE, label: '未完成' },
    { type: FilterType.COMPLETED, label: '已完成' },
  ];

  const getCount = (type: FilterType): number => {
    switch (type) {
      case FilterType.ALL:
        return counts.all;
      case FilterType.ACTIVE:
        return counts.active;
      case FilterType.COMPLETED:
        return counts.completed;
    }
  };

  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter.type}
          style={[styles.filterButton, currentFilter === filter.type && styles.activeFilterButton]}
          onPress={() => onFilterChange(filter.type)}
          activeOpacity={0.7}
        >
          <Text
            style={[styles.filterText, currentFilter === filter.type && styles.activeFilterText]}
          >
            {filter.label}
          </Text>
          <Text style={[styles.countText, currentFilter === filter.type && styles.activeCountText]}>
            {getCount(filter.type)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeFilterText: {
    color: 'white',
  },
  countText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4,
    fontWeight: '600',
  },
  activeCountText: {
    color: 'white',
    opacity: 0.8,
  },
});
