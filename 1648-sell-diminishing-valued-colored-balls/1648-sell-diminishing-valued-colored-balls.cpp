class Solution {
private:
    using LL = long long;
    
    static constexpr int mod = 1000000007;
    
    static constexpr LL rangeSum(int x, int y) {
        return static_cast<LL>(x + y) * (y - x + 1) / 2;
    }

public:
    int maxProfit(vector<int>& inventory, int orders) {
        int l = 0;
        int r = *max_element(inventory.begin(), inventory.end());
        int T = -1;
        while (l <= r) {
            int mid = (l + r) / 2;
            LL total = accumulate(inventory.begin(), inventory.end(), 0LL, [&](LL acc, int ai) {
                return acc + max(ai - mid, 0);
            });
            if (total <= orders) {
                T = mid;
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        int rest = orders - accumulate(inventory.begin(), inventory.end(), 0, [&](int acc, int ai) {
            return acc + max(ai - T, 0);
        });
        LL ans = 0;
        for (int ai: inventory) {
            if (ai >= T) {
                if (rest > 0) {
                    ans += rangeSum(T, ai);
                    --rest;
                }
                else {
                    ans += rangeSum(T + 1, ai);
                }
            }
        }
        return ans % mod;
    }
};
