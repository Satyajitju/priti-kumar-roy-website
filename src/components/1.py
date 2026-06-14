import numpy as np
import matplotlib.pyplot as plt

# --------------------------------------------------
# Global formatting
# --------------------------------------------------
plt.rcParams.update({
    "font.size": 12,
    "axes.labelsize": 12,
    "xtick.labelsize": 12,
    "ytick.labelsize": 12
})

# Portrait orientation
fig, ax = plt.subplots(figsize=(4.5, 6))

# Sample data
x = np.linspace(0, 10, 500)

y1 = np.exp(-0.2*x)
y2 = 0.8*np.exp(-0.1*x)

# --------------------------------------------------
# Curves
# --------------------------------------------------
ax.plot(
    x, y1,
    linestyle='-',
    linewidth=1.0
)

ax.plot(
    x, y2,
    linestyle=':',
    linewidth=1.0
)

# --------------------------------------------------
# Axis labels
# --------------------------------------------------
ax.set_xlabel(
    "Time in days",
    fontsize=12
)

ax.set_ylabel(
    r'$\alpha$ in mg/L',
    fontsize=12,
    rotation=0
)

# Position labels manually
ax.xaxis.set_label_coords(1.0, -0.08)
ax.yaxis.set_label_coords(-0.12, 1.02)

# --------------------------------------------------
# Axis widths
# --------------------------------------------------
for spine in ['left', 'bottom']:
    ax.spines[spine].set_linewidth(0.5)

# No frame
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# --------------------------------------------------
# Curve descriptors with arrows
# --------------------------------------------------
ax.annotate(
    "Curve A",
    xy=(3, np.exp(-0.6)),
    xytext=(5, 0.8),
    arrowprops=dict(arrowstyle='->', lw=0.5),
    fontsize=12
)

ax.annotate(
    "Curve B",
    xy=(6, 0.8*np.exp(-0.6)),
    xytext=(7.5, 0.45),
    arrowprops=dict(arrowstyle='->', lw=0.5),
    fontsize=12
)

# No legend
# ax.legend()  <-- omitted

plt.tight_layout()
plt.show()