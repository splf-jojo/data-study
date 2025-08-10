// lib/code/im2col.ts
export const IM2COL_FULL = `def im2col(X, k, stride, pad):
    N, C, H, W = X.shape 
    out_h = (H + 2*pad - k) // stride + 1 
    out_w = (W + 2*pad - k) // stride + 1 

    X_p = np.pad(X, ((0,0), (0,0), (pad,pad), (pad,pad)))
    cols = np.zeros((N, C, k, k, out_h, out_w), dtype=X.dtype)

    for i in range(k):
        i_max = i + stride*out_h
        for j in range(k):
            j_max = j + stride*out_w
            cols[:, :, i, j, :, :] = X_p[:, :, i:i_max:stride, j:j_max:stride] 
  
    cols = cols.reshape(N, C*k*k, -1).transpose(0, 2, 1)  
    
    return cols, (out_h, out_w)`;

export const STEP1 = `N, C, H, W = X.shape  # батч, каналы, высота, ширина
out_h = (H + 2*pad - k) // stride + 1  # шаги по вертикали
out_w = (W + 2*pad - k) // stride + 1  # шаги по горизонтали`;

export const STEP2 = `X_p = np.pad(
    X,
    ((0,0), (0,0), (pad,pad), (pad,pad))
)
cols = np.zeros((N, C, k, k, out_h, out_w), dtype=X.dtype)

for i in range(k):
    i_max = i + stride*out_h
    for j in range(k):
        j_max = j + stride*out_w
        cols[:, :, i, j, :, :] = X_p[:, :, i:i_max:stride, j:j_max:stride]`;

export const STEP3 = `# из (N, C, k, k, out_h, out_w)
# в (N, L, C*k*k), где L = out_h * out_w
cols = cols.reshape(N, C*k*k, -1).transpose(0, 2, 1)`;
